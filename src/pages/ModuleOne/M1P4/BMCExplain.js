import React from 'react';
import './BMCExplain.css';

// The SectionViewer component dynamically displays sections with titles, paragraphs, and optional lists.
// Props:
// - title: String that represents the section title.
// - paragraphs: Array of objects, each containing paragraph content and optionally a list of items.
// - isFirst: Boolean indicating if this section is the first to be displayed, affecting styling.
const SectionViewer = ({ title, paragraphs, isFirst }) => (
  // Conditional class name assignment for the section element to differentiate the first section.
  <section className={`bmc-detail-sec ${isFirst ? 'first-section' : ''}`}>
    <div className="bmc-detail-viewer">
      {/* Renders the section title. */}
      <h3 className="bmc-detail-title">{title}</h3>
      {/* Iterates over paragraphs to display each paragraph and its optional list. */}
      {paragraphs.map((paragraph, index) => (
        <div key={index} className="bmc-detail-section">
          {/* Paragraph content is displayed within a <p> tag. */}
          <p className="bmc-detail-description">{paragraph.content}</p>
          {/* Checks if the current paragraph object contains a list and renders it if present. */}
          {paragraph.list && (
            <ul className="bmc-detail-list">
              {/* Maps over the list items to display each as a list item. */}
              {paragraph.list.map((item, itemIndex) => (
                <li key={itemIndex} className="bmc-detail-list-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </section>
);

// The BMCExplain component is responsible for rendering multiple SectionViewer components.
// It demonstrates how sections could be dynamically generated and passed as props to SectionViewer.
const BMCExplain = () => {
  // An array to hold section data. Currently, it's empty but can be filled with section objects.
  const sections = [
    {
      title: 'Customer Segment',
      paragraphs: [
        {
          content: 'Why It Matters: The foundation of any successful business is its customers. Without a clear understanding of who you\'re serving, it\'s nearly impossible to meet needs effectively or sustain the business long-term.'
        },
        {
          content: 'Key Insights:',
          list: [
            'Understanding and Meeting Needs: By identifying groups with similar needs or behaviours (customer segments), a business can tailor its offerings to be more effective and appealing.',
            'Conscious Targeting: Deciding which customer segments to serve is as crucial as knowing which ones to pass. This choice should be based on the segments\' needs and the business\'s capabilities.',
            'Tailoring Value: Knowing the specifics about your customers—like age, location, lifestyle—enables you to customise your value proposition to what truly resonates with them.',
            'Segment Types: Recognising whether your business targets a broad market, a niche, or multiple market sides is key to aligning your business model to serve them effectively.'
          ]
        },
        {
          content: 'Core Essence: At its heart, understanding your Customer Segments is about grasping who your customers are, uncovering their needs, and figuring out the best ways to serve and create value for them.'
        }
      ]
    },
    {
      title: 'Channels',
      paragraphs: [
        {
          content: "Why They're Important: Channels are the bridges between your business and your customers, playing a critical role in the customer experience. They're about how you communicate, sell, and support your value proposition."
        },
        {
          content: 'Key Insights:',
          list: [
            'Core Functions: Channels enable your business to raise awareness about your offerings, help customers evaluate them, facilitate purchases, deliver your products or services, and provide post-purchase support.'
          ]
        },
        {
          content: 'Phases of Customer Interaction:',
          list: [
            'Awareness: Introducing potential customers to your products or services.',
            'Evaluation: Assisting in assessing the value of what you offer.',
            'Purchase: Making it easy to buy.',
            'Delivery: Ensuring your offering reaches the customer.',
            'After-sales: Providing ongoing support.'
          ]
        },
        {
          content: 'Types and Choices: Channels can be direct, like in-person or digital platforms (websites, mobile apps, social media), or indirect, such as third-party retailers. The choice between owning or partnering for these channels hinges on effectiveness and efficiency.'
        },
        {
          content: 'Strategic Considerations:',
          list: [
            'Determine how best to communicate your value proposition to customers.',
            "Understand your customers' preferred channels.",
            'Select channels that align with your business strategy and are cost-effective.',
            "Ensure your channels fit seamlessly into the customers' daily lives."
          ]
        },
        {
          content: 'Core Essence: Choosing and effectively integrating the right channels into your business model is crucial. It ensures that your value proposition is communicated in a way that resonates with your customers’ preferences and behaviors, enhancing the overall customer experience.'
        }
      ]
    },
    {
      title: 'Customer Relations',
      paragraphs: [
        {
          content: 'Purpose: Customer Relationships focus on how a business engages with its customers throughout their journey, aiming to initiate, maintain, and enhance these interactions. The nature of these relationships can range from deeply personal to fully automated, tailored to meet both customer expectations and strategic business goals.'
        },
        {
          content: 'Key Insights:',
          list: [
            'Core Goals: The primary objectives are to acquire new customers, retain existing ones, and expand business through upselling, forming a perpetual engagement cycle.',
            'Customer Expectations: Different customer segments have varied expectations from their relationship with a business. Recognising and meeting these expectations is crucial.'
          ]
        },
        {
          content: 'Types of Relationships:',
          list: [
            'Personal Assistance: Direct interaction through various channels like in-person, call centres, or email support.',
            'Dedicated Personal Assistance: A more intimate approach, where a specific representative is assigned to an individual customer.',
            'Self-Service: Providing tools and resources for customers to help themselves.',
            'Automated Services: Combining self-service with automation to deliver personalised experiences, such as customised recommendations.',
            'Communities: Facilitating platforms for customers to connect, share, and learn from each other.',
            'Co-Creation: Engaging customers in the value creation process, from product design to content creation.'
          ]
        },
        {
          content: 'Strategic Considerations:',
          list: [
            'Identify the preferred type of relationship for each customer segment.',
            'Evaluate the costs and how these relationships fit within the overall business model.',
            'Acknowledge the significance of loyal customers as a stable revenue source.'
          ]
        },
        {
          content: 'Core Essence: Selecting and managing customer relationships is a strategic process that should be aligned with your business goals. It requires understanding the diverse expectations across customer segments and finding the most effective and efficient ways to engage with them. This alignment ensures enhanced customer engagement and satisfaction, fostering loyalty and driving growth.'
        }
      ]
    },
    {
      title: 'Revenue Streams',
      paragraphs: [
        {
          content: 'Purpose: Revenue Streams represent the various ways a business generates income from its customers. They are critical to sustaining the business, acting as its financial lifeblood.'
        },
        {
          content: 'Key Insights:',
          list: [
            'Value Proposition Payment: Understanding what customers are willing to pay for is crucial. This can lead to diverse revenue streams tailored to the value each customer segment perceives and requires.',
            'Pricing Mechanisms: Methods to determine cost to the customer can include fixed pricing, bargaining, auctions, and more, influenced by factors like market conditions and purchase volume.'
          ]
        },
        {
          content: 'Main Revenue Stream Types:',
          list: [
            'Asset Sale: Direct sale of physical products.',
            'Usage Fee: Charges based on service usage.',
            'Subscription Fees: Ongoing fees for continuous service access.',
            'Lending/Renting/Leasing: Temporary use of an asset for a fee.',
            'Licensing: Use of intellectual property for a fee.',
            'Brokerage Fees: Fees for facilitating transactions.',
            'Advertising: Fees charged for advertising services.'
          ]
        },
        {
          content: 'Pricing Strategies:',
          list: [
            'Penetration and Skim Pricing: Techniques for market entry and initial pricing.',
            'Value, Promotional, and Psychological Pricing: Strategies based on perceived value, sales promotion, and psychological impact.',
            'Price Discrimination and Predatory Pricing: Differentiating pricing across segments or setting low prices to outcompete.',
            'Life Cycle, Cost Plus, Tender Pricing: Strategies considering product lifespan, cost margins, or competitive bidding.'
          ]
        },
        {
          content: 'Core Essence: Choosing the right mix of revenue streams and pricing strategies is pivotal. It hinges on a deep understanding of the customer’s value perception, the business model’s alignment with market realities, and strategic goals. Each revenue stream and pricing mechanism has its unique advantages and must be selected based on the company’s capabilities, customer segments, and overarching strategy.'
        }
      ]
    },
    {
      title: 'Key Resources',
      paragraphs: [
        {
          content: 'Purpose: Key Resources are the vital assets required for a business to function and succeed. They are foundational to creating and offering a value proposition, reaching and serving customer segments, and ensuring the business’s financial sustainability.'
        },
        {
          content: 'Categories of Key Resources:',
          list: [
            'Physical: Tangible assets such as buildings, machinery, vehicles, and technology infrastructure. Essential for businesses that depend on physical presence and logistics, like retail and distribution networks.',
            'Intellectual: Non-tangible assets including patents, copyrights, trademarks, proprietary knowledge, and customer data. Intellectual resources offer competitive advantages due to their uniqueness and difficulty to replicate. Brands and companies that leverage technology and innovation thrive on these resources.',
            'Human: The skills, knowledge, and expertise of the people within the organisation. Particularly crucial in sectors where innovation, creativity, and specialised knowledge are the drivers of success.'
          ]
        },
        {
          content: 'Strategic Importance: Understanding and strategically managing these key resources is essential. They not only support the core business operations but also empower the company to compete effectively, innovate, and adapt to market changes. The significance of each type of resource varies depending on the business model and industry, highlighting the need for a tailored approach to resource development and management.'
        },
        {
          content: 'Core Essence: At its heart, identifying and nurturing Key Resources means recognising and investing in the essential assets that underpin the company’s capacity to deliver its value proposition, engage with its customer segments, and secure its revenue streams. This strategic focus ensures the business can operate efficiently, maintain competitive advantages, and achieve long-term sustainability.'
        }
      ]
    },
    {
      title: 'Key Activities',
      paragraphs: [
        {
          content: 'Purpose: Key Activities are the most important tasks a business must undertake to ensure the success of its business model. These actions are foundational to creating and delivering the value proposition, reaching the desired customer segments, sustaining customer relationships, and securing revenue streams.'
        },
        {
          content: 'Categories of Key Activities:',
          list: [
            'Production: Involves the design, manufacture, and delivery of products. For companies focused on goods production, activities like ensuring efficiency, maintaining quality control, and guaranteeing timely delivery are paramount.',
            'Problem Solving: Focuses on devising new solutions to meet individual customer needs. Service-oriented businesses, such as consultancies, prioritise problem-solving through knowledge management and continuous learning, aiming to deliver custom solutions that add value.',
            'Platform/Network Management: Essential for companies that manage digital platforms or networks, including apps or web-based services. Activities such as software development, system integration, and user interface design are critical for providing a smooth user experience, increasing engagement, and incorporating the latest technological advancements.'
          ]
        },
        {
          content: 'Strategic Importance: Selecting and excelling in the right key activities is vital for a business’s capacity to deliver its value proposition effectively, fulfills customer needs, and maintain a competitive edge. The significance of each category varies based on the industry and the specific business model, highlighting the necessity for a strategic approach to identifying and managing these activities.'
        },
        {
          content: 'Core Essence: At its core, understanding and focusing on Key Activities means recognising the essential tasks that drive the business’s ability to offer value, engage with customers, and achieve sustainable success. This strategic focus ensures that the business operates effectively, stays relevant, and continues to thrive in its market.'
        }
      ]
    },
    {
      "title": "Partners",
      "paragraphs": [
        {
          "content": "Purpose: Key Partners are the network of suppliers, distributors, and other collaborators essential to a business’s operations. Partnerships are formed for various strategic reasons, including optimising business models, reducing risks, and accessing crucial resources."
        },
        {
          "content": "Types of Partnerships:",
          "list": [
            "Strategic Alliances between Non-Competitors: Collaborations formed with entities outside of a company’s direct competitive environment to leverage complementary strengths.",
            "Coopetition: Strategic partnerships between competitors, sharing resources or knowledge to achieve mutual benefits that would be challenging to attain independently.",
            "Joint Ventures to Develop New Businesses: Partnerships established to create new entities and explore new market opportunities together, sharing risks and rewards.",
            "Buyer-Supplier Relationships to Assure Reliable Supplies: Agreements ensuring the steady provision of essential goods and services, critical for maintaining the quality and reliability of the company’s offerings."
          ]
        },
        {
          "content": "Strategic Importance: Forming the right partnerships is crucial for a business’s ability to innovate, scale, and sustain its operations. Each type of partnership offers distinct advantages, from enhancing operational capabilities to entering new markets or developing innovative solutions. The choice of partners and the nature of these relationships should align with the company’s strategic goals and operational needs."
        },
        {
          "content": "Core Essence: Understanding and strategically selecting Key Partners involves identifying the relationships and alliances that are critical to the business’s success. These partnerships help a business optimise its operations, mitigate risks, access new resources, and enhance its competitive edge, playing a pivotal role in the business model’s overall efficacy and sustainability."
        }
      ]
    },
    {
      "title": "Cost Structure",
      "paragraphs": [
        {
          "content": "Purpose: The Cost Structure defines all the costs and expenses necessary to operate a business. It encompasses the financial outlay required for value creation, customer relationship maintenance, revenue generation, and the sustenance of key resources, activities, and partnerships."
        },
        {
          "content": "Strategies:",
          "list": [
            "Cost-driven: This strategy emphasises minimising costs wherever possible, often through automation, outsourcing, and simplification of offerings. It is suited for businesses aiming to compete on price, like budget airlines, which focus on operational efficiency to provide low-cost services.",
            "Value-driven: Contrasts with a cost-driven approach by focusing on maximising value with less emphasis on cost minimisation. This strategy is common in businesses offering premium products or services, where the goal is to deliver exceptional value and customer experiences, regardless of higher operating costs."
          ]
        },
        {
          "content": "Characteristics of Cost Structures:",
          "list": [
            "Fixed Costs: Expenses that remain constant regardless of production or sales volume, such as salaries, rent, and maintenance costs.",
            "Variable Costs: Costs that vary in direct proportion to the level of output or sales, like raw materials, labor for production, and event-specific expenses.",
            "Economies of Scale: Cost advantages that a business can achieve by increasing production volume, leading to a lower cost per unit through more efficient processes and bulk purchasing.",
            "Economies of Scope: Cost benefits gained by diversifying product lines or services, allowing a business to spread its fixed costs over a broader range of outputs, thereby reducing the average cost."
          ]
        },
        {
          "content": "Strategic Importance: Understanding and effectively managing the cost structure is critical for enhancing a company’s profitability. The choice between adopting a cost-driven or value-driven strategy should be aligned with the company’s overarching goals, target audience, and the unique value it aims to provide. This alignment is crucial for defining the business’s competitive edge and ensuring its long-term sustainability."
        },
        {
          "content": "Core Essence: At its heart, the Cost Structure component requires a strategic assessment of all costs involved in running a business. It involves making informed decisions on how to balance cost optimisation with value creation to meet the company’s strategic objectives and ensure its competitive positioning in the market."
        }
      ]
    }
  ];

  return (
    // Fragments (<></>) are used to return a list of SectionViewer components without adding extra nodes to the DOM.
    <>
      {sections.map((section, index) => (
        // Renders a SectionViewer for each section in the sections array.
        // The 'key' prop helps React identify which items have changed, are added, or are removed.
        <SectionViewer 
          key={index} 
          title={section.title} 
          paragraphs={section.paragraphs}
          isFirst={index === 0} // Passes true if this is the first section, affecting its styling.
        />
      ))}
    </>
  );
};

export default BMCExplain;
