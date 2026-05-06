import React, { useMemo, useState } from "react";
import ChatBot from "react-simple-chatbot";
import logo from "../assets/logo.png";
import "./stickyChatbot.css";

const StickyChatbot = () => {
  const [open, setOpen] = useState(false);

  const steps = useMemo(
    () => [
      {
        id: "intro",
        message:
          "Hi! Ask me about Saints of Humanity (mission, vision, core values, who we are, education/healthcare, or donation).",
        trigger: "question",
      },
      {
        id: "question",
        user: true,
        trigger: "route",
      },
      {
        id: "route",
        // We do a simple keyword-based routing.
        // If no match, the fallback response is used.
        function: ({ input }) => {
          const text = (input || "").toLowerCase();

          const cannot = "can't provide you as per request";

          // who we are
          if (
            text.includes("who") ||
            text.includes("who we are") ||
            text.includes("organization") ||
            text.includes("about")
          ) {
            return {
              value: "who",
            };
          }

          // mission
          if (
            text.includes("mission") ||
            text.includes("we exist") ||
            text.includes("restore dignity")
          ) {
            return { value: "mission" };
          }

          // vision
          if (
            text.includes("vision") ||
            text.includes("envision") ||
            text.includes("world where")
          ) {
            return { value: "vision" };
          }

          // core values
          if (
            text.includes("core") ||
            text.includes("values") ||
            text.includes("diaster relief") ||
            text.includes("criminal justice")
          ) {
            return { value: "values" };
          }

          // education/healthcare / humanitarian engagement
          if (
            text.includes("education") ||
            text.includes("health") ||
            text.includes("healthcare") ||
            text.includes("t a p") ||
            text.includes("tap") ||
            text.includes("physician") ||
            text.includes("p a p") ||
            text.includes("pap") ||
            text.includes("humanitarian")
          ) {
            return { value: "education_health" };
          }

          // donate
          if (
            text.includes("donate") ||
            text.includes("donation") ||
            text.includes("help") ||
            text.includes("support")
          ) {
            return { value: "donate" };
          }

          return { value: cannot };
        },
        asMessage: true,
        trigger: "end",
      },
      {
        id: "who",
        message:
          "The organization focuses on a broad range of activities including food distribution, shelter provision, healthcare access, education support, mental health services, and disaster relief. Additionally, it implements specialized programs such as Teachers Assistance Programs (TAP) and Physician Assistant Programs (PAP) to serve underserved urban and rural communities. SAINTS OF HUMANITY also lead environmental initiatives aimed at combating climate change through reforestation, cleanups, water sanitation, and conservation of natural and cultural heritage sites. Through its multifaceted approach, the organization seeks to build resilient communities, protect ecosystems, and promote justice and equity for all.",
        trigger: "again",
      },
      {
        id: "mission",
        message:
          "We exist to restore dignity, hope, and opportunity to the most vulnerable, homeless individuals, the mentally ill, displaced persons, and underserved communities across the world. We mobilize compassionate individuals, known as “Saints”, to provide humanitarian aid, healthcare, education, disaster relief, and social support. Our mission also includes environmental conservation, heritage preservation, criminal justice reform, and community development, all aimed at building resilient, empowered, and sustainable communities.",
        trigger: "again",
      },
      {
        id: "vision",
        message:
          "To create a world where every individual, regardless of circumstance, has access to dignity, opportunity, and support. We envision resilient communities empowered through education, healthcare, humanitarian aid, environmental stewardship, disaster preparedness, and social justice, with compassionate “Saints” leading the world.",
        trigger: "again",
      },
      {
        id: "values",
        message:
          "Our core values include: Humanitarian Engagement (recruiting and training dedicated members, known as SAINTS, to serve communities and implement our mission); Support for Vulnerable Populations (providing food, shelter, medical care, counseling, and rehabilitation for homeless, mentally ill, and underserved individuals); Education and Healthcare (operating schools, clinics, and outreach programs, including the Teachers Assistance Program (TAP) and Physician Assistant Program (PAP) to deliver quality education and healthcare in urban and rural areas); and Environmental Conservation (protecting natural resources through tree planting, waste cleanup, reforestation, water system construction, and wildlife preservation).",
        trigger: "again",
      },
      {
        id: "education_health",
        message:
          "Education and Healthcare: Operating schools, clinics, and outreach programs, including the Teachers Assistance Program (TAP) and Physician Assistant Program (PAP), to deliver quality education and healthcare in urban and rural areas. Humanitarian Engagement: Recruiting and training dedicated members, known as SAINTS, to serve communities and implement our mission. Support for Vulnerable Populations: Providing food, shelter, medical care, counseling, and rehabilitation for homeless, mentally ill, and underserved individuals.",
        trigger: "again",
      },
      {
        id: "donate",
        message:
          "To support Saints of Humanity, please visit the Donate page on this website. You can choose a donation amount and submit your donation details to help provide humanitarian aid, healthcare, education, disaster relief, and social support.",
        trigger: "again",
      },
      {
        id: "end",
        message: (props) =>
          props.value === "can't provide you as per request"
            ? "can't provide you as per request"
            : props.value,
        trigger: "again",
      },
      {
        id: "again",
        options: [
          {
            value: "ask again",
            label: "Ask another question",
            trigger: "question",
          },
          { value: "close", label: "Close", trigger: "close" },
        ],
      },
      {
        id: "close",
        end: true,
      },
    ],
    [],
  );

  return (
    <div className="sticky-chatbot-root" aria-live="polite">
      <button
        type="button"
        className="sticky-chatbot-button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chatbot"
      >
        <img className="sticky-chatbot-logo" src={logo} alt="Chat" />
      </button>

      {open && (
        <div
          className="sticky-chatbot-panel"
          role="dialog"
          aria-label="Chatbot"
        >
          <ChatBot
            steps={steps}
            initialStep="intro"
            headerTitle="Saints Bot"
            placeholder="Type your question..."
            bubbleStyle={{ backgroundColor: "#000", color: "#fff" }}
            userBubbleStyle={{ backgroundColor: "#f3f4f6", color: "#111" }}
            style={{ width: "320px" }}
            contentStyle={{ backgroundColor: "#fff" }}
            floating={false}
          />
        </div>
      )}
    </div>
  );
};

export default StickyChatbot;
