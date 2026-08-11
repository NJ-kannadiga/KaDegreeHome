import sys
from database import engine
from sqlalchemy import text, inspect

def show_tables_summary():
    inspector = inspect(engine)
    tables = inspector.get_table_names()
    print("==================================================")
    print(f" Database: {engine.url.database} on {engine.url.host or 'localhost'}")
    print("==================================================")
    
    with engine.connect() as conn:
        for table in tables:
            count = conn.execute(text(f"SELECT COUNT(*) FROM {table}")).scalar()
            columns = [col['name'] for col in inspector.get_columns(table)]
            print(f"\n📌 Table: {table} ({count} rows)")
            print(f"   Columns: {', '.join(columns)}")
            
            # Fetch up to 3 sample rows
            result = conn.execute(text(f"SELECT * FROM {table} LIMIT 3"))
            rows = result.fetchall()
            if rows:
                print("   Sample Data:")
                for r in rows:
                    print("    ", dict(r._mapping))

def run_query(query_str):
    print("==================================================")
    print(f" Executing Query: {query_str}")
    print("==================================================")
    with engine.connect() as conn:
        result = conn.execute(text(query_str))
        if result.returns_rows:
            rows = result.fetchall()
            print(f"Returned {len(rows)} row(s):\n")
            for idx, r in enumerate(rows, 1):
                print(f"Row {idx}:", dict(r._mapping))
        else:
            conn.commit()
            print("Query executed successfully.")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        custom_query = " ".join(sys.argv[1:])
        run_query(custom_query)
    else:
        show_tables_summary()
