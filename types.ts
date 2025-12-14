import React from 'react';

export enum Tab {
  USER_GUIDE = 'USER_GUIDE',
  QC_GUIDE = 'QC_GUIDE',
  AI_CHAT = 'AI_CHAT'
}

export enum Role {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  id: string;
  role: Role;
  text: string;
  timestamp: Date;
}

export interface GuideSection {
  id: string;
  title: string;
  content: React.ReactNode;
  tags: string[];
}

export interface BugStatus {
  label: string;
  description: string;
  color: string;
}