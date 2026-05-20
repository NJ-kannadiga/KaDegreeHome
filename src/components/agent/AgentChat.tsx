import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { api } from '@/lib/api';
import { Loader2, Send, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming cn utility exists in shadcn/ui setup

interface Message {
    sender: 'user' | 'agent';
    content: string;
}

export function AgentChat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [sessionId, setSessionId] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const init = async () => {
            try {
                setLoading(true);
                const data = await api.startSession();
                setSessionId(data.session_id);
                setMessages([{ sender: 'agent', content: data.message }]);
            } catch (e) {
                setMessages([{ sender: 'agent', content: "Error: Is the Python backend running on port 5000?" }]);
            } finally {
                setLoading(false);
            }
        };
        init();
    }, []);

    const handleSend = async () => {
        if (!input.trim() || !sessionId) return;

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { sender: 'user', content: userMsg }]);
        setLoading(true);

        try {
            const res = await api.sendMessage(sessionId, userMsg);
            setMessages(prev => [...prev, { sender: 'agent', content: res.response }]);
        } catch (e) {
            setMessages(prev => [...prev, { sender: 'agent', content: "Error sending message." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[500px] w-[380px] border rounded-lg shadow-xl bg-background overflow-hidden animate-in fade-in slide-in-from-bottom-10">
            <div className="p-4 border-b bg-primary text-primary-foreground font-semibold flex items-center gap-2">
                <Bot className="h-5 w-5" />
                Course Assistant
            </div>

            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                <div className="flex flex-col gap-4">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={cn(
                                "flex gap-2 max-w-[80%]",
                                msg.sender === 'user' ? "self-end flex-row-reverse" : "self-start"
                            )}
                        >
                            <div className={cn(
                                "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                                msg.sender === 'user' ? "bg-primary text-primary-foreground" : "bg-muted"
                            )}>
                                {msg.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                            </div>
                            <div className={cn(
                                "rounded-lg p-3 text-sm",
                                msg.sender === 'user'
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-foreground"
                            )}>
                                {msg.content.split('\n').map((line, j) => (
                                    <p key={j} className="mb-1 last:mb-0">{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex gap-2 self-start max-w-[80%]">
                            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                                <Bot className="h-4 w-4" />
                            </div>
                            <div className="bg-muted text-muted-foreground rounded-lg p-3 text-sm flex items-center">
                                <Loader2 className="h-4 w-4 animate-spin mr-2" /> Thinking...
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </ScrollArea>

            <div className="p-4 border-t bg-background flex gap-2">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    disabled={loading || !sessionId}
                    className="flex-1"
                />
                <Button onClick={handleSend} disabled={loading || !sessionId} size="icon">
                    <Send className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
