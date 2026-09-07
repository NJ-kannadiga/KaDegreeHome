import re

with open('src/pages/Internship.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the hidden class
text = text.replace('className="relative w-full aspect-square max-w-md mx-auto hidden lg:flex items-center justify-center"', 'className="relative w-full aspect-square max-w-[280px] md:max-w-md mx-auto flex items-center justify-center mt-8 lg:mt-0 scale-[0.85] md:scale-100"')

with open('src/pages/Internship.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print('Mobile view fixed')
