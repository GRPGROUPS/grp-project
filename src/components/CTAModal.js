import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [30, 50, 80, 40, 60],
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    },
  ],
};

const CTAModal = () => {
  const [showChart, setShowChart] = useState(false);

  const handleClick = () => {
    // Open WhatsApp with a message
    window.open("https://chat.whatsapp.com/KEZQIkyNubHHdgnDaMrZGh", "_blank");
  };

  const closeModal = () => {
    setShowChart(false);
  };

  return (
    <div className="cta-container">
      <h2>Ready to Get Started?</h2>
      <p>Contact us today to discuss how we can help you achieve your business goals!</p>
      <button className="cta-button" onClick={handleClick}>Chat</button>

      {showChart && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>Sales Chart</h3>
            <Line data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CTAModal;
