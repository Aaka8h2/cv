import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Message, AdminStats, User } from '../types';

interface AdminContextType {
  messages: Message[];
  stats: AdminStats;
  user: User | null;
  isAuthenticated: boolean;
  addMessage: (message: Omit<Message, 'id' | 'timestamp' | 'read' | 'starred' | 'replied'>) => void;
  markAsRead: (messageId: string) => void;
  toggleStar: (messageId: string) => void;
  deleteMessage: (messageId: string) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock admin credentials
  const ADMIN_CREDENTIALS = {
    email: 'admin@aakashk.com',
    password: 'admin123'
  };

  useEffect(() => {
    // Check if user is already logged in
    const savedAuth = localStorage.getItem('adminAuth');
    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      setUser(authData.user);
      setIsAuthenticated(true);
    }

    // Load messages from localStorage
    const savedMessages = localStorage.getItem('adminMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages).map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      })));
    }
  }, []);

  const addMessage = (messageData: Omit<Message, 'id' | 'timestamp' | 'read' | 'starred' | 'replied'>) => {
    const newMessage: Message = {
      ...messageData,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false,
      starred: false,
      replied: false
    };

    const updatedMessages = [newMessage, ...messages];
    setMessages(updatedMessages);
    localStorage.setItem('adminMessages', JSON.stringify(updatedMessages));
  };

  const markAsRead = (messageId: string) => {
    const updatedMessages = messages.map(msg =>
      msg.id === messageId ? { ...msg, read: true } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem('adminMessages', JSON.stringify(updatedMessages));
  };

  const toggleStar = (messageId: string) => {
    const updatedMessages = messages.map(msg =>
      msg.id === messageId ? { ...msg, starred: !msg.starred } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem('adminMessages', JSON.stringify(updatedMessages));
  };

  const deleteMessage = (messageId: string) => {
    const updatedMessages = messages.filter(msg => msg.id !== messageId);
    setMessages(updatedMessages);
    localStorage.setItem('adminMessages', JSON.stringify(updatedMessages));
  };

  const login = (email: string, password: string): boolean => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const adminUser: User = {
        id: '1',
        name: 'Aakash K',
        email: 'admin@aakashk.com',
        role: 'admin',
        avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=600'
      };
      
      setUser(adminUser);
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', JSON.stringify({ user: adminUser }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
  };

  const stats: AdminStats = {
    totalMessages: messages.length,
    unreadMessages: messages.filter(msg => !msg.read).length,
    starredMessages: messages.filter(msg => msg.starred).length,
    totalVisitors: 1247,
    projectViews: 3456,
    contactFormSubmissions: messages.length
  };

  return (
    <AdminContext.Provider value={{
      messages,
      stats,
      user,
      isAuthenticated,
      addMessage,
      markAsRead,
      toggleStar,
      deleteMessage,
      login,
      logout
    }}>
      {children}
    </AdminContext.Provider>
  );
};