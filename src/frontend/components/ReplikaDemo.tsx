import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
  heart: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, heart }) => (
  <div className="bg-white/10 rounded-lg p-5 m-2.5 w-80 text-center">
    <img src={image} alt={title} className="w-36 h-36 rounded-full mb-2.5 mx-auto" />
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="mb-2.5">{description}</p>
    <div className="text-3xl text-pink-400 mb-2.5">{heart}</div>
  </div>
);

const ReplikaDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white font-sans">
      <div className="flex items-center p-5 bg-white/10">
        <img src="/placeholder-avatar.jpg" alt="用户头像" className="w-24 h-24 rounded-full mr-5" />
        <h1 className="text-3xl">Replika</h1>
      </div>
      <div className="p-5 flex flex-wrap justify-around">
        <Card
          image="/placeholder-character1.jpg"
          title="角色1"
          description="AI 伴侣，提供情感支持。"
          heart="❤️"
        />
        <Card
          image="/placeholder-character2.jpg"
          title="角色2"
          description="创意对话伙伴。"
          heart="💕"
        />
        <Card
          image="/placeholder-character3.jpg"
          title="角色3"
          description="学习助手。"
          heart="💖"
        />
        <Card
          image="/placeholder-character4.jpg"
          title="角色4"
          description="娱乐角色。"
          heart="💗"
        />
      </div>
      <div className="p-5 text-center bg-black/20">
        <p>探索你的 AI 世界 | Replika.ai</p>
      </div>
    </div>
  );
};

export default ReplikaDemo;
