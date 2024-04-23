import React, { useState } from 'react';
import './HiTri.css';

const HiTri = () => {
  // An array of the hierarchy levels for the segmented control
  const levels = [
    'Biological and Physiological Needs',
    'Safety Needs',
    'Belongingness and Love Needs',
    'Esteem Needs',
    'Cognitive Needs',
    'Aesthetic Needs',
    'Self-Actualisation Needs',
    'Transcendence Needs'
  ];

  // Content for each level (replace with the actual content)
  const content = {
    'Biological and Physiological Needs': `
        At the base of Maslow's hierarchy, these fundamental needs are critical for basic human survival and must be satisfied first before individuals can progress to higher levels of the hierarchy. They encompass air, which is essential for respiration; water, vital for hydration; food, necessary for nutrition; shelter, providing protection and safety; warmth to regulate body temperature; and sleep, crucial for restoration and health. Also included are other bodily functions that contribute to homeostasis and overall well-being.
        
        Meeting these physical needs is a prerequisite for individuals to focus on higher pursuits such as learning, growth, and personal development. In any context, whether it’s an educational environment or a business venture, acknowledging and addressing these primary needs can significantly enhance an individual's capacity for higher-level cognitive functions and psychological well-being. Creating environments that respect and ensure these needs can facilitate concentration, learning, and the drive towards self-actualisation.
        `,
    'Safety Needs': `
        Situated above physiological requirements on Maslow's hierarchy, safety needs are pivotal for an individual's continued stability and security. They entail the protection from harm, financial security to prevent existential stress, health to avoid illness, and the safeguarding of one's property. These needs reflect a desire for predictability and order in the world.

        In a learning or business context, ensuring safety can dramatically enhance engagement and productivity. For those providing services or products, focusing on these needs could mean offering solutions that safeguard health, enhance personal security, or protect financial investments. When it comes to educational environments, this translates into creating spaces—whether physical or digital—that prioritise the safety and emotional well-being of learners. This includes measures like robust cybersecurity to protect personal data, reliable access to educational materials, and the design of safe learning spaces.
  
        Consistent communication and clear structures in educational or professional settings also meet safety needs by reducing anxiety and providing a dependable framework within which individuals can operate without distraction. When individuals feel safe, they can direct their energy towards personal growth and higher-level goals.
        `,
    'Belongingness and Love Needs': `
        Once physiological and safety needs are adequately met, the next stage in Maslow's hierarchy is the pursuit of belongingness and love. This stage reflects our intrinsic need for social interaction, acceptance, and the establishment of emotional bonds. It encompasses our relationships with friends and family, romantic partnerships, and the wider community, reflecting the human desire for companionship and understanding.

        For those in the sphere of education or business, this means recognising the powerful role that community and connection play in fostering loyalty, engagement, and satisfaction. Creating products, services, or learning environments that encourage community building, social interaction, and relationship formation can fulfil these essential human needs. In practice, this could involve incorporating social networking features into online platforms, facilitating group activities, or creating spaces that promote cooperative learning and mutual support. By prioritising these social and emotional dimensions, businesses and educational institutions can create a sense of belonging that enhances the overall experience and supports individuals in their journey toward self-actualisation.
        `,
    'Esteem Needs': `
        In the hierarchy of needs, esteem is crucial for fostering self-worth and accomplishment. It involves the human desire for respect from others, as well as inner self-respect. Esteem needs manifest as the pursuit of self-confidence, achievement, and recognition. These needs are essential for developing a sense of personal value and capability.

        For entrepreneurs and educators, addressing esteem needs means providing opportunities for individuals to demonstrate competence and receive recognition. This can be achieved through tools and platforms that allow for the showcasing of personal and professional achievements, or educational programs that offer certifications and badges upon completion. Features like progress tracking and positive feedback can validate an individual's efforts, enhancing their self-esteem and motivation.
 
        Incorporating elements that celebrate individual milestones, whether through a leaderboard or personal acknowledgments, can create a sense of pride and drive. By enabling individuals to feel accomplished and valued, businesses and learning environments can cultivate a productive and positive atmosphere, where individuals are motivated to continue striving towards their goals.
        `,
    'Cognitive Needs': `
        After satisfying the more immediate needs of safety, belonging, and esteem, individuals seek to fulfil their cognitive needs, which involve the pursuit of knowledge, understanding, and exploration. This stage of Maslow's hierarchy highlights the innate human desire for intellectual stimulation and growth.

        In the context of business and education, meeting cognitive needs can involve the creation and provision of products and services that challenge the mind and promote learning. This could include educational materials, intellectually stimulating games, or cutting-edge software that encourages users to push the boundaries of their understanding. For educators and content creators, it means developing thought-provoking material that nurtures curiosity and critical thinking.

        Offering a variety of content delivery methods to suit different learning styles—such as interactive media, discussions, and hands-on projects—ensures that intellectual appetites are met. Encouraging self-directed learning and providing opportunities for learners to dive into subjects that interest them can significantly enhance the learning experience. By addressing cognitive needs, one can foster an environment of continuous learning and personal development, helping individuals to expand their horizons and deepen their understanding of the world around them.
        `,
    'Aesthetic Needs': `
        As individuals ascend Maslow's hierarchy, they reach the aesthetic needs that encompass a deep appreciation for beauty, balance, and form. This level is about the desire to experience and create aesthetically pleasing sensations and environments. It reflects an inherent need to appreciate and seek harmony in one's surroundings and can significantly influence emotional well-being.

        Entrepreneurs and educators can address these needs by developing products, services, and environments that prioritise aesthetic value. In terms of products, this could mean offering goods that not only serve a function but also delight the senses, such as beautifully crafted home decor, fashion, or elegantly designed digital interfaces. For educational tools and environments, the emphasis on aesthetics could translate into creating learning materials and spaces that are visually attractive and intellectually stimulating.
        
        Incorporating elements like harmonious design, multimedia content, and an overall visually appealing user interface can make learning platforms more engaging. Similarly, for physical learning spaces, thoughtful architecture, pleasing colour schemes, and natural lighting can create an inviting atmosphere that promotes learning. By fulfilling aesthetic needs, one not only elevates the user experience but also resonates with the consumer's values and sense of beauty, potentially fostering a deeper connection to the material and the learning journey itself.
        `,
    'Self-Actualisation Needs': `
        At the apex of Maslow's hierarchy lies self-actualisation, which represents the fulfilment of one's potential and the realisation of one's true self. It is characterised by a pursuit of personal growth, self-discovery, and peak experiences. Self-actualisation is not just about reaching goals but also about the journey of becoming the most authentic version of oneself.

        For entrepreneurs and educators, addressing self-actualisation needs means providing avenues for individuals to explore and develop their talents, express creativity, and engage in tasks that challenge and fulfill them. Products and services that facilitate personal development, such as career advancement programs, creative outlets, or travel that broadens perspectives, cater to this profound need. In learning environments, this translates into creating platforms and opportunities for learners to delve into subjects that ignite their passion, develop complex skills, and participate in innovative projects.

        Tools that encourage self-reflection and documentation of personal growth, such as digital portfolios, journals, or mentorship programs, can aid individuals in their quest for self-actualisation. Offering personalised learning experiences and paths that align with individual goals enables learners to steer their educational journey towards personal excellence. By fostering an environment where individuals feel supported in their pursuit of self-actualisation, businesses and educational institutions can cultivate a deep sense of loyalty and satisfaction, empowering people to achieve their ultimate potential.
        `,
      'Transcendence Needs': `
        Transcendence represents the highest level in the extended version of Maslow's hierarchy, where the focus shifts from self-fulfilment to the well-being of others and a higher purpose. It embodies the desire to transcend the individual self and contribute to something greater, facilitating the actualisation of others. This stage is characterised by a deep sense of altruism, spirituality, and community service.

        In the entrepreneurial and educational spheres, addressing transcendence needs means creating initiatives that not only serve personal goals but also have a positive impact on society and enable others to reach their potential. This could involve establishing ventures that prioritise social responsibility, environmental care, and educational up-liftment. For entrepreneurs, transcendent aspirations might manifest in the form of businesses that focus on community development, platforms that unite individuals around humanitarian causes, or content that broadens perspectives and cultivates wisdom.

        Products and services that resonate with transcendence are those that foster community engagement, encourage philanthropy, and support sustainability. Integrating social impact into business models not only aligns with the values of a growing number of consumers looking to make a meaningful difference in the world but also establishes a legacy that outlives mere product lifecycles. By fostering a brand ethos that emphasises service and societal contribution, entrepreneurs can connect with their audience on a deeper level and create a lasting, positive footprint in the world.
        `
  };

  // Function to convert text into paragraphs, enhancing readability.
  const renderParagraphs = (text) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className="maslows-hierarchy__paragraph">
        {paragraph.trim()}
      </p>
    ));
  };

  // State hook to manage the currently active level, initializing with the first level from the list.
  const [activeLevel, setActiveLevel] = useState(levels[0]);

  // Function to handle tab click events, updating the active level accordingly.
  const handleLevelClick = (level) => {
    setActiveLevel(level); // Set the clicked level as active.
  };

  // Construct the URL for the main image from the public assets folder.
  const imageUrl = `${process.env.PUBLIC_URL}/MaslowsHiTri2.png`;

  return (
    <section className="maslows-hierarchy">
      <div className="maslows-hierarchy__container">
        <h1 className="maslows-hierarchy__title">Understanding Consumer Needs</h1>
        <p className="maslows-hierarchy__description">
          Maslow’s Hierarchy of Needs provides insights into consumer motivations,
          serving as a guide to pinpoint market opportunities that align with these fundamental human necessities.
        </p>
        <img 
          className="maslows-hierarchy__image" 
          src={imageUrl} 
          alt="Maslow's Hierarchy of Needs" 
        />

        <div className="maslows-hierarchy__levels">
          {/* Mapping through 'levels' to render a button for each level */}
          {levels.map((level, index) => (
            <button
              key={index}
              className={`maslows-hierarchy__level-button ${activeLevel === level ? 'active' : ''}`}
              onClick={() => handleLevelClick(level)}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="maslows-hierarchy__content-card">
          {/* Rendering paragraphs dynamically based on the active level */}
          {renderParagraphs(content[activeLevel])}
        </div>
      </div>
    </section>
  );
};

export default HiTri;