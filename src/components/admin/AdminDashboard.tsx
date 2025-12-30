import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Mail, 
  Users, 
  Eye, 
  Star, 
  Trash2, 
  Reply, 
  Search,
  Filter,
  Download,
  Settings,
  LogOut,
  Bell,
  Calendar,
  TrendingUp,
  MessageSquare,
  Globe,
  Shield
} from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';

const AdminDashboard: React.FC = () => {
  const { messages, stats, user, logout, markAsRead, toggleStar, deleteMessage } = useAdmin();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'unread' && !message.read) ||
                         (filterStatus === 'starred' && message.starred);
    
    return matchesSearch && matchesFilter;
  });

  const StatCard = ({ title, value, icon: Icon, color, trend }: any) => (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
          {trend && (
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm text-green-500">{trend}</span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  );

  const MessageCard = ({ message }: { message: any }) => (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${
        message.read ? 'border-gray-300' : 'border-blue-500'
      }`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className={`font-semibold ${message.read ? 'text-gray-700 dark:text-gray-300' : 'text-gray-900 dark:text-white'}`}>
              {message.name}
            </h3>
            {!message.read && (
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            )}
            {message.starred && (
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
            )}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{message.email}</p>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1">{message.subject}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">
            {message.timestamp.toLocaleDateString()}
          </span>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
        {message.message}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <button
            onClick={() => markAsRead(message.id)}
            className="p-1 text-gray-500 hover:text-blue-600 transition-colors duration-200"
            title={message.read ? 'Mark as unread' : 'Mark as read'}
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => toggleStar(message.id)}
            className={`p-1 transition-colors duration-200 ${
              message.starred ? 'text-yellow-500' : 'text-gray-500 hover:text-yellow-500'
            }`}
            title={message.starred ? 'Remove star' : 'Add star'}
          >
            <Star className="w-4 h-4" />
          </button>
          <button
            className="p-1 text-gray-500 hover:text-green-600 transition-colors duration-200"
            title="Reply"
          >
            <Reply className="w-4 h-4" />
          </button>
          <button
            onClick={() => deleteMessage(message.id)}
            className="p-1 text-gray-500 hover:text-red-600 transition-colors duration-200"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 relative">
                <Bell className="w-5 h-5" />
                {stats.unreadMessages > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {stats.unreadMessages}
                  </span>
                )}
              </button>
              
              <div className="flex items-center space-x-3">
                <img
                  src={user?.avatar || 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=600'}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{user?.name}</span>
              </div>
              
              <button
                onClick={logout}
                className="p-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'messages', label: 'Messages', icon: MessageSquare },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                  title="Total Messages"
                  value={stats.totalMessages}
                  icon={Mail}
                  color="from-blue-500 to-cyan-500"
                  trend="+12% this week"
                />
                <StatCard
                  title="Unread Messages"
                  value={stats.unreadMessages}
                  icon={Bell}
                  color="from-red-500 to-pink-500"
                  trend={stats.unreadMessages > 0 ? 'Needs attention' : 'All caught up!'}
                />
                <StatCard
                  title="Total Visitors"
                  value={stats.totalVisitors.toLocaleString()}
                  icon={Users}
                  color="from-green-500 to-emerald-500"
                  trend="+8% this month"
                />
                <StatCard
                  title="Project Views"
                  value={stats.projectViews.toLocaleString()}
                  icon={Eye}
                  color="from-purple-500 to-indigo-500"
                  trend="+15% this week"
                />
              </div>

              {/* Recent Messages */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Messages</h2>
                  <button
                    onClick={() => setActiveTab('messages')}
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                  >
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {messages.slice(0, 3).map((message) => (
                    <MessageCard key={message.id} message={message} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'messages' && (
            <motion.div
              key="messages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Messages Header */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Messages</h2>
                  
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    {/* Search */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search messages..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    
                    {/* Filter */}
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="all">All Messages</option>
                      <option value="unread">Unread</option>
                      <option value="starred">Starred</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Messages List */}
              <div className="space-y-4">
                {filteredMessages.length > 0 ? (
                  filteredMessages.map((message) => (
                    <MessageCard key={message.id} message={message} />
                  ))
                ) : (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
                    <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No messages found</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {searchTerm || filterStatus !== 'all' 
                        ? 'Try adjusting your search or filter criteria.'
                        : 'Messages will appear here when visitors contact you.'}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Analytics Dashboard</h2>
                <div className="text-center py-12">
                  <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Analytics Coming Soon</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Detailed analytics and insights will be available here.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Settings</h2>
                <div className="text-center py-12">
                  <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Settings Panel</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Configuration options will be available here.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboard;