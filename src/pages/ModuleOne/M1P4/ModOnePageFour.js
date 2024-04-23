import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './BusModel.css';
import './BMCExplain.css';
import './ValuePropo.css';
import './M1Prog4.css';
import AuthPrompt from '../../../components/AuthPrompt/AuthPrompt';
import LoadingIn from '../../../components/AuthPrompt/LoadingIn';
import { AccountContext } from "../../../components/Account";

const BusModel = () => {
  return (
    <section className="bmc-section">
      <div className="bmc-container">
        <div className="bmc-container__description">
          <header className="bmc-header">
            <h1 className="bmc-main-title">Business Model Basics</h1>
          </header>
          <h2 className="bmc-container__section-title">What Is It?</h2>
          <p className="bmc-container__text">The Business Model Canvas (BMC) is a strategic blueprint that outlines how your company brings value to customers, operates, and earns revenue. It's a clear visual chart that describes your company's core functions and how they interconnect.</p>
          <h2 className="bmc-container__section-title">Why Use It?</h2>
          <ul className="bmc-container__list">
            <li className="bmc-container__list-item__strong"><strong>Clarify Value:</strong> Pinpoint exactly what makes your offerings unique.</li>
            <li className="bmc-container__list-item__strong"><strong>Identify Customers:</strong> Determine who needs your products and why.</li>
            <li className="bmc-container__list-item__strong"><strong>Streamline Operations:</strong> Understand your business's essential assets and activities.</li>
            <li className="bmc-container__list-item__strong"><strong>Financial Insight:</strong> Analyse your cost structure and revenue streams.</li>
          </ul>
          <h2 className="bmc-container__section-title">How It Works</h2>
          <p className="bmc-container__text">Your business model encompasses the flow of products and services to the market, while detailing the financial and operational infrastructure necessary to make it happen. It connects the value you offer with your target customers and maps out the money-making strategy.</p>
          <p className="bmc-container__text">Remember, a business model is dynamic. It can and should evolve with your business as you grow and learn more about your customers and market.</p>
          <h2 className="bmc-container__section-title">Using Timmers' Definition</h2>
          <p className="bmc-container__text">Taking a leaf from Timmers (1999), your BMC is an architecture of your business's offerings, flows, and interactions. It's a comprehensive snapshot capturing:</p>
          <ul className="bmc-container__list">
            <li className="bmc-container__list-item">The roles and benefits for each business actor involved.</li>
            <li className="bmc-container__list-item">The network that supports and sustains your offerings.</li>
            <li className="bmc-container__list-item">How you'll earn revenue and create a profitable enterprise.</li>
          </ul>
        </div>

        <div className="bmc-business-model-canvas">
          <h2 className="bmc-title bmc-cost-title">Things that cost money</h2>
          <div className="bmc-section bmc-cost-incuring">
            <div className="bmc-box" id="bmc-key-partners">
              <h3>Key Partners</h3>
            </div>
            <div className="bmc-box" id="bmc-key-activities">
              <h3>Key Activities</h3>
            </div>
            <div className="bmc-box" id="bmc-key-resources">
              <h3>Key Resources</h3>
            </div>
          </div>
          <h2 className="bmc-title bmc-money-title">Things that make money</h2>
          <div className="bmc-section bmc-money-making">
            <div className="bmc-box" id="bmc-customer-segments">
              <h3>Customer Segments</h3>
            </div>
            <div className="bmc-box" id="bmc-customer-relations">
              <h3>Customer Relations</h3>
            </div>
            <div className="bmc-box" id="bmc-channels">
              <h3>Channels</h3>
            </div>
          </div>
          <div className="bmc-box bmc-large" id="bmc-value-proposition">
            <h3>Value Proposition</h3>
          </div>
          <div className="bmc-box bmc-large" id="bmc-cost-structure">
            <h3>Cost Structure</h3>
          </div>
          <div className="bmc-box bmc-large" id="bmc-revenue-streams">
            <h3>Revenue Streams & Pricing Model</h3>
          </div>
        </div>
      </div>
    </section>
  );
};



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



// Tab component represents an individual tab button.
// Props:
// - id: Unique identifier for the tab, used to determine if the tab is active.
// - title: Text displayed on the tab button.
// - activeTab: Identifier of the currently active tab.
// - setActiveTab: Function to update the active tab state in the parent component.
const Tab = ({ id, title, activeTab, setActiveTab }) => (
  // Renders a button element for the tab.
  // Clicking the button sets the current tab to active using the provided setActiveTab function.
  <button
    onClick={() => setActiveTab(id)} // Sets this tab as active when clicked.
    className={`tab-button ${activeTab === id ? 'active' : ''}`} // Adds 'active' class if this tab is the current active tab.
  >
    {title}
  </button>
);

// TabPanel component represents the content area for a tab.
// Props:
// - id: Unique identifier for the tab panel, matched with a tab.
// - content: The content to be displayed when this tab panel is active.
// - activeTab: Identifier of the currently active tab to determine visibility.
const TabPanel = ({ id, content, activeTab }) => (
  // Renders a div that contains the content of the tab.
  // Only visible if this panel's id matches the activeTab.
  <div
    className={`tab-panel ${activeTab === id ? 'active' : 'hidden'}`} // Shows this panel if it's active, otherwise hides it.
  >
    {content}
  </div>
);

// ValuePropo component encapsulates a tabs system for displaying various value propositions.
// Utilises local state to manage which tab is currently active.
const ValuePropo = () => {
  // Path to the image to be used in one of the tabs.
  const imageUrl = '/ValuePropoImg.jpeg';

  // State hook for managing the active tab. Default is set to 'productsServices'.
  const [activeTab, setActiveTab] = useState('productsServices');

  // An object to hold the content for each tab. The keys correspond to tab identifiers.
  const tabContent = {
    productsServices: (
      <>
        <h2>Products and Services: Crafting Your Customer-Centric Value Proposition</h2>
        <p>Your value proposition is the linchpin that presents your products and services as the precise solutions your customers are searching for. It serves as the storefront for your offerings, whether they are physical goods, services, digital products, or financial assets, showcasing how they align with customer jobs, pains, and gains. Here’s how to articulate this effectively:</p>
        <ul>
          <li><strong>Showcase Your Offerings:</strong>
            <ul>
              <li>Provide a clear and comprehensive list of what you offer, ensuring each product or service directly responds to your customers' needs, challenges, and aspirations.</li>
              <li>Your offerings should stand out as the answer to the problems your customers aim to solve and the goals they wish to achieve.</li>
            </ul>
          </li>
          <li><strong>Understand the Value:</strong>
            <ul>
              <li>Emphasise the real value your offerings bring to the table, which lies in their ability to effectively address customer jobs, alleviate pains, and amplify gains.</li>
              <li>Your products and services should offer a harmonious blend that meets and exceeds customer expectations, tailored to their specific jobs-to-be-done.</li>
            </ul>
          </li>
          <li><strong>Prioritise Relevance:</strong>
            <ul>
              <li>Distinguish between the critical must-haves and the additional nice-to-haves.</li>
              <li>Focus on the offerings that are essential for fulfilling customer needs and ensuring their satisfaction.</li>
            </ul>
          </li>
        </ul>
        <p>In sum, your value proposition should seamlessly integrate the essence of what customers will see and purchase with a clear, organised presentation of your products and services. It’s about highlighting their indispensability and relevance to customer needs, ensuring your offerings are perceived as vital for the accomplishment of their tasks and the enhancement of their lives.</p>
      </>
    ),
    painRelievers: (
      <>
        <h2>Pain Relievers: Easing Customer Frustrations</h2>
        <p>Pain Relievers are crucial components of your value proposition, designed to directly address and alleviate the frustrations and obstacles that customers encounter. These elements underscore your commitment to easing customer efforts and improving their experience. Here's how to refine and present this aspect effectively:</p>
        <ul>
          <li><strong>Identify Pain Points:</strong>
            <ul>
              <li>Systematically list the specific challenges, obstacles, and annoyances that your offerings are designed to mitigate.</li>
              <li>Pay particular attention to the pains that significantly hinder customers' ability to complete tasks or solve problems efficiently.</li>
            </ul>
          </li>
          <li><strong>Offer Solutions:</strong>
            <ul>
              <li>Clearly detail how your product or service features specifically remove or lessen these obstacles.</li>
              <li>Focus on alleviating the most intense and critical pains first, as these have the most substantial impact on enhancing customer satisfaction.</li>
            </ul>
          </li>
          <li><strong>Concentrate on Relevance:</strong>
            <ul>
              <li>Aim to relieve pains that are most pertinent to your customers, ensuring that your solutions are precisely tailored to their needs.</li>
              <li>It's more effective to excellently mitigate a few significant pains than to spread your efforts too thinly across many lesser ones.</li>
            </ul>
          </li>
        </ul>
        <p>Your value proposition should thus highlight the targeted elimination or significant reduction of the most pressing customer pains. By showcasing your offerings as not merely solutions but as essential tools for overcoming their toughest challenges, you position your business as a key ally in enhancing their overall experience and satisfaction.</p>
      </>
    ),
    gainCreators: (
      <>
        <h2>Gain Creators: Elevating Customer Experience Beyond Expectations</h2>
        <p>Gain Creators are essential components of your value proposition, designed to promise and deliver tangible benefits that exceed customer expectations. These elements of your products or services directly contribute to positive outcomes in functionality, social standing, emotional well-being, or cost efficiency. Here’s how to effectively present these advantages:</p>
        <ul>
          <li><strong>Define the Benefits:</strong>
            <ul>
              <li>List the specific improvements your offerings can bring to your customers.</li>
              <li>These should align with what your customers truly value and seek in a product or service, encompassing areas like enhanced functionality, improved social image, greater emotional satisfaction, and better cost efficiency.</li>
            </ul>
          </li>
          <li><strong>Tailor the Advantages:</strong>
            <ul>
              <li>Prioritise and focus on the most significant gains—those where your product or service can make a substantial difference.</li>
              <li>Highlight unique benefits that differentiate your business from competitors, ensuring these advantages resonate with what's most important to your customers.</li>
            </ul>
          </li>
          <li><strong>Emphasise Relevance:</strong>
            <ul>
              <li>Center your message on the gains most cherished by your customers.</li>
              <li>Avoid an exhaustive list of benefits, which can dilute the impact of your message.</li>
              <li>Instead, aim to deliver unexpected delights in addition to the anticipated advantages, enhancing the perceived value of your offerings.</li>
            </ul>
          </li>
        </ul>
        <p>Ultimately, your value proposition should crystallise the unique value your offerings bring, focusing on the aspects most valuable to your customers. By ensuring each gain creator is a step towards enhancing customer satisfaction and loyalty, you solidify the position of your products or services as not just meeting but surpassing customer expectations.</p>
      </>
    ),
    customerJobs: (
      <>
        <h2>Solving for Customer Jobs: Tailoring Your Value Proposition to Fit Customer Goals</h2>
        <p>To develop a compelling value proposition, it's essential to grasp the "jobs" your customers need to accomplish. These jobs can be tasks they're trying to complete, challenges they're aiming to overcome, or needs they're seeking to fulfil. Viewing these jobs from the customer's perspective, not your own, is crucial for truly connecting with and addressing their needs.</p>
        <ul>
          <li><strong>Identify Customer Jobs:</strong> Determine the activities or objectives your customers are focused on achieving. This requires adopting the customer's viewpoint to understand the significance and context of each job in their lives.</li>
          <li><strong>Categorise the Jobs:</strong>
            <ul>
              <li><strong>Functional Jobs:</strong> These are practical tasks, such as completing a project or maintaining a healthy lifestyle.</li>
              <li><strong>Social Jobs:</strong> Goals related to enhancing social status, like appearing knowledgeable or fashionable.</li>
              <li><strong>Personal/Emotional Jobs:</strong> Jobs that seek to fulfill emotional desires, such as achieving peace of mind or satisfaction.</li>
            </ul>
          </li>
        </ul>
        <p>Focus on the jobs that hold the most importance to your customers, considering their particular context and the impact of each job. Your value proposition should directly align with these jobs, demonstrating a clear understanding of what your customers are striving for, whether it's task-oriented, social, or emotional. This approach ensures your offering meets your customers where they are, providing solutions that resonate deeply with their needs and aspirations.</p>
      </>
    ),
    customerPains: (
      <>
        <h2>Alleviating Customer Pains: Transforming Challenges into Satisfaction</h2>
        <p>Customer pains are the obstacles and frustrations encountered while trying to achieve goals. Understanding and addressing these pains in your value proposition is essential for connecting with and providing value to your customers. Here’s how to effectively communicate your comprehension of customer pains:</p>
        <ul>
          <li><strong>Acknowledge and Describe Customer Pains:</strong> Recognise the various hurdles your customers face, including:
            <ul>
              <li><strong>Functional Pains:</strong> Issues like ineffective solutions or unwanted side effects.</li>
              <li><strong>Social Pains:</strong> Worries about social image or status.</li>
              <li><strong>Emotional Pains:</strong> Negative feelings associated with completing a task.</li>
              <li><strong>Ancillary Pains:</strong> Inconveniences that make solutions less appealing, such as unattractive or uninteresting options.</li>
            </ul>
          </li>
          <li><strong>Evaluate Pain Severity:</strong> Assess whether these pains are severe barriers or minor annoyances, and understand how they impact the customer's ability to achieve their objectives.</li>
          <li><strong>Identify Obstacles and Risks:</strong>
            <ul>
              <li><strong>Obstacles:</strong> Factors like a lack of resources or time that prevent customers from starting or completing tasks.</li>
              <li><strong>Risks:</strong> Potential negative outcomes, such as loss of credibility or security concerns.</li>
            </ul>
          </li>
        </ul>
        <p>Your value proposition should not just highlight these pains but also demonstrate how your offerings alleviate them, presenting your solutions as the key to navigating these challenges. By doing so, you significantly enhance customer satisfaction and position your offering as indispensable for overcoming the specific pains your customers face.</p>
      </>
    ),
    customerGains: (
      <>
        <h2>Customer Gains: Delivering a Spectrum of Benefits for Maximum Satisfaction</h2>
        <p>Customer gains are the benefits and positive outcomes your customers experience from using your products or services. These gains range from essential functionalities to unexpected bonuses that can significantly enhance customer satisfaction. Here's how to structure your value proposition around customer gains:</p>
        <ul>
          <li><strong>Highlight Desired Outcomes:</strong> Identify the key benefits your customers seek or would be delighted by. These gains can be:
            <ul>
              <li><strong>Required Gains:</strong> Fundamental benefits essential for the product to be considered useful, such as a phone's ability to make calls.</li>
              <li><strong>Expected Gains:</strong> Basic expectations from the product, like good design in smartphones.</li>
              <li><strong>Desired Gains:</strong> Additional features or benefits customers value, such as seamless device integration.</li>
              <li><strong>Unexpected Gains:</strong> Surprising benefits that exceed expectations, similar to the introduction of touch screens in smartphones before they became a standard feature.</li>
            </ul>
          </li>
          <li><strong>Determine Gain Relevance:</strong> Understand that some gains are critical to customer satisfaction while others serve as additional perks. Prioritise these gains based on their significance to the customer.</li>
        </ul>
        <p>In your value proposition, clearly articulate how your offerings meet essential and expected gains and how they potentially exceed expectations with desired and unexpected benefits. This approach ensures your offerings align closely with customer priorities, maximising satisfaction and positioning your products or services as uniquely capable of delivering the full spectrum of customer gains.</p>
      </>
    )
  };

  return (
    <>
      <div className="vp-full-container"></div>
      <div className="vp-container">
        <h1 className="vp-main-title">Value Propositions</h1>

        <div className="vp-intro">
          <h2 className="vp-intro-title">Value Proposition: The Heart of Customer Attraction</h2>
          <p>Your Value Proposition is what makes your customers pick you. It's all about the unique blend of products and services you offer that fulfill specific needs or solve problems for a particular Customer Segment. Think of it as the bundle of benefits that you promise to deliver to your customers.</p>

          <h3>Innovation vs. Improvement</h3>
          <ul>
            <li>Some Value Propositions break new ground with innovative offers.</li>
            <li>Others enhance existing solutions with additional features or attributes.</li>
          </ul>

          <h3>Creating Value</h3>
          <p>Your Value Proposition should cater to both tangible needs (like cost and speed) and intangible desires (like design and experience).</p>
          <ul>
            <li>Innovation: Offering something new.</li>
            <li>Performance: Improving a product’s utility.</li>
            <li>Customisation: Tailoring to individual needs.</li>
            <li>Design: Standing out with superior aesthetics.</li>
            <li>Brand/Status: Leveraging brand power to confer status.</li>
            <li>Price: Offering the right thing at the right price.</li>
            <li>Convenience: Making it easier to access or use.</li>
            <li>Accessibility: Reaching customers where they are.</li>
          </ul>
        </div>
        <div className="vp-image-container">
          <img src={imageUrl} alt="Value Propositions Visual" className="vp-image" />
        </div>
        <div className="tabs">
          <div className="tab-headers">
            <Tab id="productsServices" title="Products & Services" activeTab={activeTab} setActiveTab={setActiveTab} />
            <Tab id="gainCreators" title=" Gain Creators" activeTab={activeTab} setActiveTab={setActiveTab} />
            <Tab id="painRelievers" title="Pain Relievers" activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="separator"></div> {/* This is the visual separator */}
            <Tab id="customerGains" title=" Customer Gains" activeTab={activeTab} setActiveTab={setActiveTab} />
            <Tab id="customerPains" title=" Customer Pains" activeTab={activeTab} setActiveTab={setActiveTab} />
            <Tab id="customerJobs" title=" Customer Jobs" activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="tab-content">
            <TabPanel id="productsServices" content={tabContent.productsServices} activeTab={activeTab} />
            <TabPanel id="painRelievers" content={tabContent.painRelievers} activeTab={activeTab} />
            <TabPanel id="gainCreators" content={tabContent.gainCreators} activeTab={activeTab} />
            <TabPanel id="customerJobs" content={tabContent.customerJobs} activeTab={activeTab} />
            <TabPanel id="customerPains" content={tabContent.customerPains} activeTab={activeTab} />
            <TabPanel id="customerGains" content={tabContent.customerGains} activeTab={activeTab} />
          </div>
        </div>
      </div>
    </>
  );
};



// The M1Prog4 component is responsible for navigation and interaction within Module 1, Progress Step 4.
// It allows users to move between modules, take quizzes, and progress through the course content.
const M1Prog4 = () => {
  // The useNavigate hook from React Router is utilised for navigation.
  const navigate = useNavigate();

  // Navigates to the previous page in the browser's history, likely the previous module or section.
  const goToPreviousModule = () => {
    navigate(-1); // Utilises the browser's history stack to go back.
  };

  // Navigates to the next module, identified as M1P5, indicating Module 1, Progress Step 5.
  const goToNextModule5 = () => {
    navigate('/moduleOne/M1P5'); // Directly navigates to a specified path.
  };

  // Opens a new tab to a quiz related to the current module or section.
  const goToQuiz = () => {
    // Opens a Google Forms link in a new tab for the user to take a quiz.
    window.open("https://forms.gle/nbKNrNz8yumdwDQ18", "_blank");
  };

  // The component returns JSX structure, including a section for the module, quiz interaction, and navigation buttons.
  return (
    <section className="module-progress-4-section">
      <div className="module-progress-4-container">
        {/* Heading indicating the conclusion of the Business Model Canvas (BMC) module. */}
        <h2 className="module-progress-4__quiz-text">The BMC Concluded: Paving Your Path to Innovation</h2>
        {/* A button that triggers the quiz for this module. */}
        <button onClick={goToQuiz} className="module-progress-4__quiz-button">
          Take the Quiz
        </button>
        {/* Container for navigation buttons allowing the user to move to the previous or next section. */}
        <div className="module-progress-4__button-container">
          <button onClick={goToPreviousModule} className="module-progress-4__button--back">
            Return to Previous Section
          </button>
          <button onClick={goToNextModule5} className="module-progress-4__button--next">
            Continue to Next Section
          </button>
        </div>
      </div>
    </section>
  );
};



// Component to manage and display content based on the user's authentication status
function ModOnePageFour() {
  const { getSession } = useContext(AccountContext); // Utilising useContext hook to access getSession function from AccountContext
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track whether the user is logged in
  const [isLoading, setIsLoading] = useState(true); // State to track whether the authentication check is loading

  // useEffect hook to perform the authentication check once the component mounts
  useEffect(() => {
    getSession() // Attempt to get the current user session
      .then(() => {
        setIsLoggedIn(true); // If successful, set isLoggedIn to true
      })
      .catch(() => {
        setIsLoggedIn(false); // If an error occurs, set isLoggedIn to false
      })
      .finally(() => {
        setIsLoading(false); // Once the check is complete, set isLoading to false
      });
  }, [getSession]); // Dependency array to ensure the effect runs only when getSession function changes

  // Conditional rendering based on the authentication status
  if (isLoading) {
    return <LoadingIn />; // Displays a loading indicator while checking authentication status
  }

  if (!isLoggedIn) {
    return <AuthPrompt />; // If not logged in, render the AuthPrompt component to ask for authentication
  }
  
  // If the user is logged in, render the main content of the application
  return (
    <div>

      <BusModel />
      <BMCExplain />
      <ValuePropo />
      <M1Prog4 />

    </div>
  );
}

export default ModOnePageFour;