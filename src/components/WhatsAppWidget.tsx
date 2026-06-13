import React from 'react';

const WhatsAppWidget: React.FC = () => {
  return (
    <a
      href="https://wa.me/qr/JOJ65BJMSGZDN1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 md:bottom-8 md:right-8 lg:h-16 lg:w-16"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8 lg:h-10 lg:w-10"
      >
        <path
          fillRule="evenodd"
          d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.776.466 3.504 1.343 5.035L2 22l5.093-1.332A9.972 9.972 0 0012.031 22c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.441 14.51c-.227.638-1.328 1.229-1.838 1.295-.457.058-1.042.115-3.327-.83-2.76-1.144-4.526-4.004-4.66-4.184-.134-.18-1.112-1.482-1.112-2.827 0-1.345.698-2.006.945-2.277.247-.27.535-.337.715-.337.18 0 .36.002.518.01.168.007.394-.063.616.471.227.545.735 1.794.8 1.93.065.134.11.291.02.47-.09.18-.134.292-.268.448-.134.158-.282.34-.403.471-.134.144-.276.3-.122.566.154.266.685 1.134 1.474 1.838.995.891 1.839 1.167 2.106 1.301.267.134.423.111.58-.066.157-.179.674-.784.854-1.053.18-.269.36-.224.606-.134.246.09 1.554.733 1.821.867.267.134.445.2.512.311.066.111.066.645-.161 1.283z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
};

export default WhatsAppWidget;
