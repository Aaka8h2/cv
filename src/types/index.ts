export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: Date;
  read: boolean;
  starred: boolean;
  replied: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
}

export interface AdminStats {
  totalMessages: number;
  unreadMessages: number;
  starredMessages: number;
  totalVisitors: number;
  projectViews: number;
  contactFormSubmissions: number;
}

export interface ProjectAnalytics {
  projectId: string;
  views: number;
  clicks: number;
  lastViewed: Date;
}