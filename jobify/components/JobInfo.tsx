function JobInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className='flex gap-x-2 items-center'>
      <span>{icon}</span>
      <span>{text}</span> 
    </div>
  );
};

export default JobInfo;