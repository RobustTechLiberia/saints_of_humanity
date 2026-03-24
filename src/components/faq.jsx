import React from "react";

function FAQ() {
  const [openId, setOpenId] = React.useState(null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <>
      <div className="bg-white md:pb-20 pb-28 h-auto">
        <h1 className="font-medium font-serif uppercase text-left text-3xl md:mx-80 md:pt-20 py-5 mx-10">
          faq
        </h1>
        <div className="bg-white md:mx-80 mx-8 md:py-10">
          <div className="bg-white">
            <div className="border-b border-black/15">
              <h2 id="faq-heading-1">
                <button
                  type="button"
                  onClick={() => toggle("who")}
                  className="flex items-center cursor-pointer justify-between w-full p-5 font-medium text-left font-serif text-black hover:bg-gray-50 gap-3"
                  aria-expanded={openId === "who"}
                  aria-controls="faq-panel-1"
                >
                  <span className="capitalize text-xl">who we are?</span>
                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      openId === "who" ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m5 15 7-7 7 7"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="faq-panel-1"
                className={openId === "who" ? "block" : "hidden"}
                aria-labelledby="faq-heading-1"
              >
                <div className="p-4 md:p-5">
                  <p className="mb-2 font-serif text-black">
                    The organization focuses on a broad range of activities
                    including food distribution, shelter provision, healthcare
                    access, education support, mental health services, and
                    disaster relief. Additionally, it implements specialized
                    programs such as Teachers Assistance Programs (TAP) and
                    Physician Assistant Programs (PAP) to serve underserved
                    urban and rural communities. SAINTS OF HUMANITY also lead
                    environmental initiatives aimed at combating climate change
                    through reforestation, cleanups, water sanitation, and
                    conservation of natural and cultural heritage sites. Through
                    its multifaceted approach, the organization seeks to build
                    resilient communities, protect ecosystems, and promote
                    justice and equity for all.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-black/15">
              <h2 id="faq-heading-2">
                <button
                  type="button"
                  onClick={() => toggle("mission")}
                  className="flex items-center cursor-pointer justify-between w-full p-5 font-medium text-left font-serif text-black hover:bg-gray-50 gap-3"
                  aria-expanded={openId === "mission"}
                  aria-controls="faq-panel-2"
                >
                  <span className="text-xl capitalize">mission</span>
                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      openId === "mission" ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m5 15 7-7 7 7"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="faq-panel-2"
                className={openId === "mission" ? "block" : "hidden"}
                aria-labelledby="faq-heading-2"
              >
                <div className="p-4 md:p-5">
                  <p className="mb-2 text-black font-serif">
                    We exist to restore dignity, hope, and opportunity to the
                    most vulnerable, homeless individuals, the mentally ill,
                    displaced persons, and underserved communities across the
                    world. We mobilize compassionate individuals, known as
                    “Saints”, to provide humanitarian aid, healthcare,
                    education, disaster relief, and social support. Our mission
                    also includes environmental conservation, heritage
                    preservation, criminal justice reform, and community
                    development, all aimed at building resilient, empowered, and
                    sustainable communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-black/15">
              <h2 id="faq-heading-vision">
                <button
                  type="button"
                  onClick={() => toggle("vision")}
                  className="flex items-center cursor-pointer justify-between w-full p-5 font-medium text-left font-serif text-black hover:bg-gray-50 gap-3"
                  aria-expanded={openId === "vision"}
                  aria-controls="faq-panel-vision"
                >
                  <span className="text-xl capitalize">vision</span>
                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      openId === "vision" ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m5 15 7-7 7 7"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="faq-panel-vision"
                className={openId === "vision" ? "block" : "hidden"}
                aria-labelledby="faq-heading-vision"
              >
                <div className="p-4 md:p-5">
                  <p className="mb-2 text-black font-serif">
                    To create a world where every individual, regardless of
                    circumstance, has access to dignity, opportunity, and
                    support. We envision resilient communities empowered through
                    education, healthcare, humanitarian aid, environmental
                    stewardship, disaster preparedness, and social justice, with
                    compassionate “Saints” leading the world.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-black/15 border-none">
              <h2 id="faq-heading-3">
                <button
                  type="button"
                  onClick={() => toggle("values")}
                  className="flex items-center cursor-pointer justify-between w-full p-5 font-medium text-left font-serif text-black hover:bg-gray-50 gap-3"
                  aria-expanded={openId === "values"}
                  aria-controls="faq-panel-3"
                >
                  <span className="text-xl capitalize">our core values</span>
                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      openId === "values" ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m5 15 7-7 7 7"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="faq-panel-3"
                className={openId === "values" ? "block" : "hidden"}
                aria-labelledby="faq-heading-3"
              >
                <div className="p-4 md:p-5 border-t border-black/10">
                  <ul className="list-disc list-inside text-black font-serif space-y-2">
                    <li>
                      <b>Diaster Relief:</b> Assisting communities affected by
                      natural or man-made disasters with shelter, food,
                      education, and essential services.
                    </li>
                    <li>
                      <b>Criminal Justice and Reintegration:</b> Advocating for
                      justice reforms and providing rehabilitation programs for
                      inmates to support their successful reintegration.
                    </li>
                    <li>
                      <b>Heritage and Cultural Preservation:</b> Maintaining and
                      conserving historical, cultural, and natural sites locally
                      and internationally.
                    </li>
                    <li>
                      <b>Community Development and Research:</b> Supporting
                      initiatives aligned with the United Nations Sustainable
                      Development Goals (SDGs) and conducting research to inform
                      humanitarian and social programs.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
