import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import logo from "../assets/logo.png";
import "./stickyChatbot.css";

/* =========================
   CHAT ROUTER
========================= */

const Router = ({ steps, triggerNextStep }) => {
  const input = steps.user.value.toLowerCase();

  let next = "fallback";

  // about
  if (
    input.includes("who") ||
    input.includes("about") ||
    input.includes("organization")
  ) {
    next = "about";
  }

  // mission
  else if (input.includes("mission")) {
    next = "mission";
  }

  // vision
  else if (input.includes("vision")) {
    next = "vision";
  }

  // values
  else if (input.includes("values") || input.includes("core")) {
    next = "values";
  }

  // education
  else if (
    input.includes("education") ||
    input.includes("health") ||
    input.includes("healthcare") ||
    input.includes("tap") ||
    input.includes("pap")
  ) {
    next = "education";
  }

  // donation
  else if (
    input.includes("donate") ||
    input.includes("support") ||
    input.includes("help")
  ) {
    next = "donate";
  }

  setTimeout(() => {
    triggerNextStep({ trigger: next });
  }, 300);

  return <div />;
};

/* =========================
   MAIN COMPONENT
========================= */

const StickyChatbot = () => {
  const [open, setOpen] = useState(false);

  const steps = [
    {
      id: "welcome",
      message:
        "Hi 👋 Welcome to Saints of Humanity. Ask me about mission, vision, healthcare, education, or donations.",
      trigger: "user",
    },

    {
      id: "user",
      user: true,
      trigger: "router",
    },

    {
      id: "router",
      component: <Router />,
      waitAction: true,
      asMessage: true,
    },

    {
      id: "about",
      message:
        "Saints of Humanity focuses on humanitarian aid, education, healthcare, shelter support, environmental programs, and community development.",
      trigger: "more",
    },

    {
      id: "mission",
      message:
        "Our mission is to restore dignity, hope, and opportunity through humanitarian support, healthcare, education, and social empowerment.",
      trigger: "more",
    },

    {
      id: "vision",
      message:
        "Our vision is a world where every individual has access to dignity, support, education, healthcare, and justice.",
      trigger: "more",
    },

    {
      id: "values",
      message:
        "Our core values include humanitarian engagement, education, healthcare access, environmental conservation, and community empowerment.",
      trigger: "more",
    },

    {
      id: "education",
      message:
        "We operate outreach programs, schools, clinics, TAP initiatives, and healthcare support systems for underserved communities.",
      trigger: "more",
    },

    {
      id: "donate",
      message:
        "You can support Saints of Humanity through the donation page on this website.",
      trigger: "more",
    },

    {
      id: "fallback",
      message:
        "Sorry, I didn't understand that. Please ask about mission, vision, education, healthcare, or donations.",
      trigger: "more",
    },

    {
      id: "more",
      options: [
        {
          value: "yes",
          label: "Ask Again",
          trigger: "user",
        },
        {
          value: "close",
          label: "Close",
          trigger: "bye",
        },
      ],
    },

    {
      id: "bye",
      message: "Thank you for chatting with Saints of Humanity ❤️",
      end: true,
    },
  ];

  return (
    <div className="chatbot-wrapper">
      {/* FLOATING BUTTON */}
      <button className="chatbot-button" onClick={() => setOpen(!open)}>
        <img src={logo} alt="chatbot" className="chatbot-button-image" />
      </button>

      {/* POPUP WINDOW */}
      {open && (
        <div className="chatbot-popup">
          {/* CLOSE */}
          <button className="chatbot-close" onClick={() => setOpen(false)}>
            ×
          </button>

          <ChatBot
            steps={steps}
            headerTitle="Saints Bot"
            botAvatar={logo}
            hideUserAvatar={false}
            hideBotAvatar={false}
            recognitionEnable={false}
            floating={false}
            placeholder="Type message..."
            width="100%"
            height="100%"
            style={{
              borderRadius: "12px",
            }}
            contentStyle={{
              backgroundColor: "#f5f5f5",
            }}
            bubbleStyle={{
              backgroundColor: "#8e44ad",
              color: "#fff",
            }}
            userBubbleStyle={{
              backgroundColor: "#ff7675",
              color: "#fff",
            }}
            headerStyle={{
              backgroundColor: "#6c3483",
              color: "#fff",
              fontWeight: "bold",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default StickyChatbot;
