import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import NeuralBackground from "@/components/neural-background";
import Image from "next/image";
import GuraImage from "../../../public/Gawr-Gura-PNG-Isolated-Image.png";

// For university life blog post images
import food1 from "../../../public/IMG_0164.png";
import food2 from "../../../public/IMG_0166.png";
import food3 from "../../../public/IMG_0213.png";
import food4 from "../../../public/IMG_0216.png";
import niagra from "../../../public/IMG_0383.png";
import capybara from "../../../public/IMG_0299.png";
import goose from "../../../public/IMG_0255.png";
import construction from "../../../public/IMG_0306.png";
import ta from "../../../public/ta_bruh.png";

// This is a simple database of blog posts
const blogPosts = {
  "thoughts-pt-1": {
    title: "Thoughts (Pt 1)",
    date: "December 30, 2024",
    category: "Personal",
    readTime: "3 min read",
    content: `
      <h2>My Random Thoughts</h2>
      <p>At the time of writing this blog I have three stuffies beside me on my desk. Winter break is almost ending!!! I am also listening to ... Delaney Bailey??? When did i have her in my playlist jeez.</p>
      
      <p>This is the first part of my thoughts series where I&apos;ll share random musings and reflections. I&apos;m looking forward to writing more content and sharing my journey with you all.</p>
      
      <h2>In Progress...</h2>
      <p>More content coming soon! This page is still in progress...</p>
    `,
  },
  "university-life-y1-t1": {
    title: "University Life (Y1 T1)",
    date: "December 30, 2024",
    category: "University",
    readTime: "4 min read",
    content: `
      <h2>My First Term at Waterloo</h2>
      <p>First term at uwaterloo in a nutshell. Banger food there actually. Got addicted to bs 😓. Learned a bunch of new things doing AI research and projects with friends. Overall great time tho.</p>
      
      <p>When I first arrived at the University of Waterloo, I wasn&apos;t sure what to expect. The campus was larger than I anticipated, but I quickly found my way around. The computer science program is challenging but rewarding.</p>
      
      <h2>In Progress...</h2>
      <p>More content coming soon! This page is still in progress...</p>
    `,
  },
  "understanding-neural-networks-1": {
    title: "Understanding Neural Networks Part 1: The Basics",
    date: "May 15, 2023",
    category: "Deep Learning",
    readTime: "8 min read",
    content: `
      <h2>Introduction to Neural Networks</h2>
      <p>Neural networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns. They interpret sensory data through a kind of machine perception, labeling or clustering raw input.</p>
      
      <h2>The Structure of a Neural Network</h2>
      <p>A neural network consists of layers of interconnected nodes. Each node is a perceptron and is similar to a multiple linear regression. The perceptron feeds the signal produced by a multiple linear regression into an activation function that may be nonlinear.</p>
      
      <h2>Types of Neural Networks</h2>
      <p>There are several types of neural networks, each with their own specific use cases and architectures:</p>
      <ul>
        <li>Feedforward Neural Networks</li>
        <li>Convolutional Neural Networks (CNNs)</li>
        <li>Recurrent Neural Networks (RNNs)</li>
        <li>Long Short-Term Memory Networks (LSTMs)</li>
        <li>Generative Adversarial Networks (GANs)</li>
      </ul>
      
      <h2>Training Neural Networks</h2>
      <p>Neural networks learn by processing examples, each of which contains a known "input" and "result," forming probability-weighted associations between the two, which are stored within the data structure of the network itself. The training process involves adjusting the parameters, or the weights and biases, of the model in order to minimize the difference between the output of the network and the actual output.</p>
      
      <h2>Activation Functions</h2>
      <p>Activation functions are mathematical equations that determine the output of a neural network. The function is attached to each neuron in the network, and determines whether it should be activated or not, based on whether each neuron&apos;s input is relevant for the model&apos;s prediction.</p>
      
      <h2>Conclusion</h2>
      <p>Neural networks are a powerful tool for machine learning and can be used to solve a wide variety of problems. In Part 2 of this series, we&apos;ll explore more advanced neural network architectures and their applications.</p>
    `,
  },
  "understanding-neural-networks-2": {
    title: "Understanding Neural Networks Part 2: Advanced Architectures",
    date: "May 22, 2023",
    category: "Deep Learning",
    readTime: "10 min read",
    content: `
      <h2>Advanced Neural Network Architectures</h2>
      <p>In Part 1, we covered the basics of neural networks. Now, let&apos;s dive into more advanced architectures that have revolutionized the field of deep learning.</p>
      
      <h2>Convolutional Neural Networks (CNNs)</h2>
      <p>CNNs are particularly effective for image classification and recognition tasks. They use a mathematical operation called convolution in place of general matrix multiplication in at least one of their layers. This allows them to efficiently process grid-like data such as images.</p>
      
      <h2>Recurrent Neural Networks (RNNs)</h2>
      <p>RNNs are designed to recognize patterns in sequences of data, such as text, genomes, handwriting, or spoken word. They use their internal state (memory) to process sequences of inputs, making them ideal for tasks where context and order matter.</p>
      
      <h2>Transformers</h2>
      <p>Transformers have become the architecture of choice for natural language processing tasks. Unlike RNNs, transformers process all input data at once through a mechanism called self-attention, which allows them to weigh the importance of different parts of the input data differently.</p>
      
      <h2>Generative Adversarial Networks (GANs)</h2>
      <p>GANs consist of two networks, a generator and a discriminator, that work against each other. The generator creates samples that it tries to pass off as real, while the discriminator tries to identify which samples are fake. This adversarial process results in the generator producing increasingly realistic samples.</p>
      
      <h2>Graph Neural Networks (GNNs)</h2>
      <p>GNNs are designed to process data that can be represented as graphs, such as social networks, molecular structures, or knowledge graphs. They can capture the dependencies between nodes in a graph and use this information to make predictions.</p>
      
      <h2>Conclusion</h2>
      <p>These advanced neural network architectures have enabled significant breakthroughs in various fields, from computer vision to natural language processing. As research continues, we can expect even more powerful and efficient architectures to emerge.</p>
    `,
  },
  "reinforcement-learning": {
    title: "Reinforcement Learning: Teaching AI to Play Games",
    date: "June 5, 2023",
    category: "Reinforcement Learning",
    readTime: "12 min read",
    content: `
      <h2>Introduction to Reinforcement Learning</h2>
      <p>Reinforcement Learning (RL) is a type of machine learning where an agent learns to make decisions by taking actions in an environment to maximize some notion of cumulative reward. This approach has been particularly successful in teaching AI to play games.</p>
      
      <h2>Key Concepts in Reinforcement Learning</h2>
      <p>There are several key concepts in RL:</p>
      <ul>
        <li>Agent: The learner or decision-maker</li>
        <li>Environment: What the agent interacts with</li>
        <li>State: The current situation of the agent</li>
        <li>Action: What the agent can do</li>
        <li>Reward: Feedback from the environment</li>
        <li>Policy: The agent&apos;s strategy</li>
      </ul>
      
      <h2>Q-Learning and Deep Q-Networks</h2>
      <p>Q-Learning is a value-based RL algorithm that seeks to find the best action to take given the current state. Deep Q-Networks (DQNs) combine Q-Learning with deep neural networks to handle high-dimensional state spaces, such as those in video games.</p>
      
      <h2>Policy Gradient Methods</h2>
      <p>Policy gradient methods directly optimize the policy without using a value function. These methods are particularly useful for continuous action spaces and have been successful in teaching AI to play complex games like Dota 2 and StarCraft II.</p>
      
      <h2>AlphaGo and AlphaZero</h2>
      <p>AlphaGo, developed by DeepMind, was the first computer program to defeat a world champion in the game of Go. Its successor, AlphaZero, learned to play Go, chess, and shogi at a superhuman level through self-play, without any human knowledge beyond the rules of the games.</p>
      
      <h2>Challenges and Future Directions</h2>
      <p>Despite its successes, RL still faces challenges such as sample efficiency, exploration-exploitation trade-off, and transfer learning. Future research directions include multi-agent RL, hierarchical RL, and combining RL with other learning paradigms.</p>
      
      <h2>Conclusion</h2>
      <p>Reinforcement learning has proven to be a powerful approach for teaching AI to play games, and its principles are being applied to a wide range of real-world problems beyond games, from robotics to healthcare.</p>
    `,
  },
  "generative-ai": {
    title: "The Rise of Generative AI Models",
    date: "June 18, 2023",
    category: "Generative AI",
    readTime: "9 min read",
    content: `
      <h2>The Evolution of Generative AI</h2>
      <p>Generative AI refers to artificial intelligence systems that can generate new content, such as images, text, audio, or video, that resembles human-created content. These models have seen remarkable progress in recent years.</p>
      
      <h2>Generative Adversarial Networks (GANs)</h2>
      <p>GANs, introduced by Ian Goodfellow in 2014, consist of two neural networks—a generator and a discriminator—that are trained together. The generator creates samples, and the discriminator evaluates them. The generator&apos;s goal is to fool the discriminator, leading to increasingly realistic outputs.</p>
      
      <h2>Variational Autoencoders (VAEs)</h2>
      <p>VAEs are another type of generative model that learns to encode data into a latent space and then decode it back. Unlike GANs, VAEs provide a more stable training process and allow for more control over the generation process.</p>
      
      <h2>Diffusion Models</h2>
      <p>Diffusion models, such as DALL-E 2 and Stable Diffusion, have recently gained popularity for image generation. These models work by gradually adding noise to an image and then learning to reverse this process, allowing them to generate high-quality images from text descriptions.</p>
      
      <h2>Large Language Models (LLMs)</h2>
      <p>LLMs like GPT-4 and LLaMA are trained on vast amounts of text data and can generate coherent and contextually relevant text. They have applications in content creation, conversation, code generation, and more.</p>
      
      <h2>Applications and Implications</h2>
      <p>Generative AI has numerous applications, from creative tools for artists and designers to assistive technologies for content creation. However, it also raises concerns about misinformation, copyright, and the potential misuse of generated content.</p>
      
      <h2>Conclusion</h2>
      <p>Generative AI models represent a significant advancement in artificial intelligence, enabling machines to create content that was previously the exclusive domain of humans. As these models continue to evolve, they will likely transform many industries and aspects of our lives.</p>
    `,
  },
  "ethical-ai": {
    title: "Ethical Considerations in AI Development",
    date: "July 3, 2023",
    category: "AI Ethics",
    readTime: "11 min read",
    content: `
      <h2>The Importance of AI Ethics</h2>
      <p>As artificial intelligence becomes increasingly integrated into our daily lives, the ethical implications of AI development and deployment have come to the forefront of discussions in the tech community and beyond.</p>
      
      <h2>Bias and Fairness</h2>
      <p>AI systems can perpetuate and amplify existing biases in society if they are trained on biased data or designed with biased assumptions. Ensuring fairness in AI requires careful consideration of data collection, algorithm design, and evaluation metrics.</p>
      
      <h2>Transparency and Explainability</h2>
      <p>Many advanced AI models, particularly deep learning models, are often described as "black boxes" due to their complexity. Increasing the transparency and explainability of AI systems is crucial for building trust and enabling users to understand how decisions are made.</p>
      
      <h2>Privacy and Data Protection</h2>
      <p>AI systems often require large amounts of data, raising concerns about privacy and data protection. Developers must consider how data is collected, stored, and used, and ensure compliance with relevant regulations such as GDPR.</p>
      
      <h2>Accountability and Responsibility</h2>
      <p>As AI systems become more autonomous, questions of accountability and responsibility become more complex. Who is responsible when an AI system makes a mistake or causes harm? How can we ensure that AI developers and deployers are held accountable?</p>
      
      <h2>The Role of Regulation</h2>
      <p>Regulation can play a crucial role in ensuring that AI is developed and deployed ethically. However, finding the right balance between enabling innovation and preventing harm is a complex challenge that requires input from various stakeholders.</p>
      
      <h2>Conclusion</h2>
      <p>Ethical considerations should be at the heart of AI development, not an afterthought. By addressing these issues proactively, we can harness the potential of AI to benefit society while minimizing potential harms.</p>
    `,
  },
  "ml-deployment": {
    title: "Best Practices for Deploying ML Models in Production",
    date: "July 20, 2023",
    category: "MLOps",
    readTime: "14 min read",
    content: `
      <h2>The Challenges of ML Deployment</h2>
      <p>Deploying machine learning models in production environments presents unique challenges compared to traditional software deployment. These include model versioning, monitoring, scaling, and ensuring reliability.</p>
      
      <h2>MLOps: DevOps for Machine Learning</h2>
      <p>MLOps, or DevOps for machine learning, is a set of practices that aims to deploy and maintain machine learning models in production reliably and efficiently. It combines machine learning, DevOps, and data engineering.</p>
      
      <h2>Model Versioning and Reproducibility</h2>
      <p>Keeping track of different versions of models and ensuring reproducibility is crucial for maintaining and improving models over time. Tools like Git LFS, DVC, and MLflow can help with this.</p>
      
      <h2>Continuous Integration and Continuous Deployment (CI/CD)</h2>
      <p>CI/CD pipelines automate the process of testing and deploying models, reducing the risk of errors and speeding up the deployment process. These pipelines should include steps for data validation, model training, evaluation, and deployment.</p>
      
      <h2>Monitoring and Maintenance</h2>
      <p>Once a model is deployed, it needs to be monitored for performance degradation, data drift, and other issues. Regular retraining and updating of models is often necessary to maintain performance.</p>
      
      <h2>Scaling and Performance Optimization</h2>
      <p>As the number of users or the volume of data increases, ML systems need to scale accordingly. This may involve optimizing models for inference speed, using distributed training, or implementing load balancing.</p>
      
      <h2>Conclusion</h2>
      <p>Deploying ML models in production requires a combination of machine learning expertise and software engineering best practices. By following MLOps principles and using appropriate tools, organizations can deploy and maintain ML models more effectively.</p>
    `,
  },
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  // Use the slug directly from params
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="mt-4">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button asChild className="mt-6">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  // Special rendering for university life blog post
  if (slug === "university-life-y1-t1") {
    return (
      <div className="relative min-h-screen">
        <NeuralBackground />
        <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <Button variant="outline" size="sm" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <article className="mx-auto w-full max-w-2xl prose prose-invert">
            <header className="mb-8 not-prose">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-white">
                  <Image
                    className="mr-4 w-16 h-16 rounded-full"
                    src={GuraImage}
                    alt="Image"
                    width={64}
                    height={64}
                  />
                  <div>
                    <span className="text-xl font-bold text-white">
                      Jonathan Gong
                    </span>
                    <p className="text-base text-gray-400">Your friend</p>
                    <p className="text-base text-gray-400">
                      <time dateTime="2024-12-31" title="December 31st, 2024">
                        Dec. 31, 2024
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white">
                University Life (Y1 T1)
              </h1>
            </header>

            <p className="lead">
              A new chapter in my life has begun, or so they say. One of the
              first huge decisions one makes in their life is choosing their
              university. Yet I don&apos;t feel much has changed.
            </p>

            <p>
              I made up my mind starting uni to eat good. To ensure that there
              was really only one option: to cook myself. Cost-effective and
              delicious sure, but there&apos;s a reason why people don&apos;t
              cook for themselves, it&apos;s a lot of work. Yet if cooking
              myself was only a means of survival, I wouldn&apos;t have lasted
              long. I&apos;ve come to enjoy the process of cooking, and sharing
              the moment with friends. An important decision one must make for
              themselves as how to destress. Uni is stressful, not matter how
              hard I try to hide it, under good grades or a smile. I&apos;ve
              found that cooking is a great way to destress. So heres some pics,
              heh.
            </p>

            <figure className="grid grid-cols-2 gap-2 my-2">
              <div>
                <Image
                  src={food1}
                  alt="Food I cooked"
                  width={400}
                  height={300}
                  className="rounded-md"
                />
              </div>
              <div>
                <Image
                  src={food2}
                  alt="Food I cooked"
                  width={400}
                  height={300}
                  className="rounded-md"
                />
              </div>
              <div>
                <Image
                  src={food3}
                  alt="Food I cooked"
                  width={400}
                  height={300}
                  className="rounded-md"
                />
              </div>
              <div>
                <Image
                  src={food4}
                  alt="Food I cooked"
                  width={400}
                  height={300}
                  className="rounded-md"
                />
              </div>
            </figure>

            <h3>Studying</h3>

            <p>
              In my opinion the first big shock is the grading system. Unlike
              high-school where consistency is valued, university is all about
              two big exams: the midterm and final. Midterms creep up on you
              quickly, and before you feel like you&apos;re settled in into uni,
              you&apos;re already writing your first midterm. Yet UWaterloo and
              I think other universities give a week without classes before
              midterms to &quot;study&quot; (reading week). Being studious in
              these times is important, but so is taking breaks. You might be
              like me, and lose sense of what I am studying for. A friend of
              mine asked me to go on a day trip to niagara falls and I was
              hesitant at first, but I went. A relaxing trip was all I needed to
              rethink my priorities. Realising that the age that I am at is a
              time I will never get back, and that I should make the most of it.
            </p>

            <div className="my-4">
              <Image
                src={niagra}
                alt="Niagara Falls"
                width={700}
                height={500}
                className="rounded-md mx-auto"
              />
            </div>

            <h3>Computer Science</h3>

            <p>
              The day in my life as a CS student has changed quite drasticly
              since I&apos;ve started uni until now. I think the weather of
              Waterloo played a big part in it as well. I remember the first
              weeks of uni, I was going to the library study after class, and
              always had time to do fun things like go downtown on the weekends.
              But as the weather got colder, I found myself spending more and
              more time in my dorm at my desk studying.
            </p>

            <p>
              The major in of itself is quite interesting, but I have mixed
              reviews about it. Here I am going to rate my courses and give my
              thoughts.
            </p>

            <div className="pl-4">
              <h4>Courses</h4>
              <p>
                These are the typical CS courses that first years take. However
                I skipped Calc 1 (MATH 137) with my AP credits.
              </p>
              <table className="border-collapse w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-2 pl-2">Course</th>
                    <th className="text-left py-2 pl-2">
                      Difficulty &amp; Interest
                    </th>
                    <th className="text-left py-2 pl-2">
                      HS Courses that Helped
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-600">
                    <td className="py-2 pl-2">CS 135</td>
                    <td className="py-2 pl-2">7/10 &amp; 5/10</td>
                    <td className="py-2 pl-2">
                      <strong>
                        Any CS course, consider learning the Racket language (I
                        hate this) in advance
                      </strong>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="py-2 pl-2">MATH 135</td>
                    <td className="py-2 pl-2">7.5/10 &amp; 8/10</td>
                    <td className="py-2 pl-2">
                      <strong>Algebra courses. AoPS helped a lot</strong>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="py-2 pl-2">MATH 138</td>
                    <td className="py-2 pl-2">5/10 &amp; 6/10</td>
                    <td className="py-2 pl-2">
                      <strong>
                        If you&apos;re in IB or AP take your hardest calc
                        classes
                      </strong>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="py-2 pl-2">COMMST 223</td>
                    <td className="py-2 pl-2">2/10 &amp; 6/10</td>
                    <td className="py-2 pl-2">
                      <strong>Bird class, speeches in HS helped</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pl-2">ECON 102</td>
                    <td className="py-2 pl-2">3/10, 7/10</td>
                    <td className="py-2 pl-2">
                      <strong>
                        Bird class, any econ class in HS but learn some Canadian
                        context
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              Here&apos;s a picture of me malding over my ta destroying my MATH
              135 quiz
            </p>

            <div className="my-4">
              <Image
                src={ta}
                alt="Reaction to TA feedback"
                width={700}
                height={500}
                className="rounded-md mx-auto"
              />
            </div>

            <h3>Stuff ouside of studying</h3>

            <p>
              Of course at UWaterloo there are many opportunities to get
              involved in clubs or research or orginizations. I joined the UW
              undergraduate AI orginization named{" "}
              <Link
                href={"/experience"}
                className="text-blue-400 hover:underline"
              >
                WAT.ai
              </Link>{" "}
              and became a researcher for a project on diabetes management. At
              the same time I collaborated with some friends to create a webapp
              called{" "}
              <Link
                href={"/projects"}
                className="text-blue-400 hover:underline"
              >
                WatClub
              </Link>{" "}
              that helps students connect with clubs and orginizations in the
              university. Doing these projects was a great way to learn new
              things, and also opened my eyes to how smart and talented the
              people around me are. It made me really excited to learn from
              these peopleas well as to share my knowledge with them.
              Here&apos;s a picture of some prizes we won using WatClub!
            </p>

            <div className="my-4">
              <Image
                src={capybara}
                alt="Prizes won with WatClub"
                width={700}
                height={500}
                className="rounded-md mx-auto"
              />
            </div>

            <h3>Friends</h3>

            <p>
              I am very grateful for the friends I have made at UWaterloo.
              Extremely grateful I should say. Waterloo is generally a pretty
              depressing city, with the weather being cold and the architecture
              in campus being extremely brutalist in nature. Yet the friends I
              have made have made my experience at Waterloo a lot better.
              Studying with them is fun, and I have learned a lot from them.
              Every other day having dinner together and going for desserts
              while working on projects and playing games is the highlight of my
              day no question. Without them I would have gone insane by now.
              University is really like other people say. It is what you make of
              it. You can go to the most beautiful campus in the world, but if
              you don&apos;t have friends, you will be miserable. Humans are
              sociable creatures, and we need other people to be happy.
            </p>

            <p>
              Here is a final photo dump! I found a goose that lost a leg!?!?
              Construction also started on the new math building :(
            </p>

            <figure className="grid grid-cols-2 gap-2 my-4">
              <div>
                <Image
                  src={goose}
                  alt="One-legged goose"
                  width={400}
                  height={300}
                  className="rounded-md"
                />
              </div>
              <div>
                <Image
                  src={construction}
                  alt="Construction on campus"
                  width={400}
                  height={300}
                  className="rounded-md"
                />
              </div>
            </figure>

            <h2 className="mt-8">Thanks for Reading!</h2>
          </article>
        </div>
      </div>
    );
  }

  // For the first blog post, use the custom layout with the Gura image
  if (slug === "thoughts-pt-1") {
    return (
      <div className="relative min-h-screen">
        <NeuralBackground />
        <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <Button variant="outline" size="sm" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <article className="mx-auto w-full max-w-2xl">
            <header className="mb-8">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-white">
                  <Image
                    className="mr-4 w-16 h-16 rounded-full"
                    src={GuraImage}
                    alt="Jonathan Gong"
                    width={64}
                    height={64}
                  />
                  <div>
                    <span className="text-xl font-bold text-white">
                      Jonathan Gong
                    </span>
                    <p className="text-base text-gray-400">Your friend</p>
                    <p className="text-base text-gray-400">
                      <time dateTime="2024-12-30" title="December 30th, 2024">
                        Dec. 30, 2024
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="text-3xl font-extrabold leading-tight lg:text-4xl text-white">
                Thoughts (Pt 1)
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span>Personal</span>
                <span>•</span>
                <span>3 min read</span>
              </div>
            </header>

            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    );
  }

  // For other blog posts, use the existing layout
  return (
    <div className="relative min-h-screen">
      <NeuralBackground />
      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Button variant="outline" size="sm" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <article className="prose prose-invert mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <div className="text-sm font-medium text-palette-lightBlue">
              {post.category}
            </div>
            <h1 className="mt-2 text-4xl font-bold tracking-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div
            className="prose-headings:text-foreground prose-a:text-palette-blue prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
