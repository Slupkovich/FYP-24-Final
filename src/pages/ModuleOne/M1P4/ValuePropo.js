import React from 'react';
import './ValuePropo.css';

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

  export default ValuePropo;