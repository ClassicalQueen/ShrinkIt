import Brand from '../assets/brand.png';
import Detail from '../assets/detail.png';
import Custom from '../assets/Shape.png';
import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const features = [
    {
      Image: <img src={Brand} alt="an image" />,
      title: 'Brand Recognition',
      description:
        'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.',
    },
    {
      Image: <img src={Detail} alt="an image" />,
      title: 'Detailed Records',
      description:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    },
    {
      Image: <img src={Custom} alt="an image" />,
      title: 'Fully Customizable',
      description:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    },
  ];

  const [url, setUrl] = useState('');
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [error, setError] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(-1);

  const handleShortenLink = async () => {
    if (!url) {
      setError('Please enter a URL');
      return;
    }

    try {
      const response = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        { long_url: url },
        {
          headers: {
            Authorization: '554b44eb9bd3384d34f197ff58fc9760720cfa9c', // Replace with your Bitly token
            'Content-Type': 'application/json',
          },
        }
      );
      setShortenedLinks([
        ...shortenedLinks,
        { original: url, shortened: response.data.link },
      ]);
      setUrl('');
      setError('');
    } catch (err) {
      setError('Failed to shorten the URL. Please try again.');
    }
  };

  const handleCopy = (index, link) => {
    navigator.clipboard.writeText(link);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(-1), 2000); // Reset "Copied" state after 2 seconds
  };

  return (
    <div className='bg-smoke'>
      {/* Hero Section */}
      <div className='flex flex-col-reverse md:flex-row justify-between items-center bg-white'>
        <div className='p-6 mt-12 text-center md:text-left'>
          <h1 className='font-extrabold text-4xl md:text-5xl max-w-[500px]'>
            More than just shorter links
          </h1>
          <div className='text-lg md:text-xl max-w-[500px] mt-5 md:mt-10'>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
          </div>
          <div className='mt-6 md:mt-8 max-w-[135px] mx-auto md:mx-0 text-lg px-4 py-2 bg-primary text-white rounded-full hover:opacity-70 hover:text-black hover:bg-white hover:border-black hover:border-[1px] transition'>
            <button>Get Started</button>
          </div>
        </div>
        <div className='mb-10 md:mb-0'>
          <img
            src='../src/assets/working_with_computer.png'
            alt='illustration'
            className='max-w-full'
          />
        </div>
      </div>

      {/* Shorten Link Section */}
      <div className='bg-smoke md:-translate-y-16'>
        <div className='flex justify-center items-center mt-10 md:mt-16 -translate-y-10'>
          <div className='flex flex-col md:flex-row p-5 bg-darkBlue md:w-full max-w-[900px] rounded-[10px] items-center md:justify-between gap-4'>
            <input
              type='text'
              placeholder='Shorten a link here...'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className='p-3 rounded-md w-full md:w-[750px]'
            />
            <button
              className='p-3 bg-primary rounded-md text-white w-full md:w-auto hover:opacity-80 transition'
              onClick={handleShortenLink}
            >
              Shorten It!
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && <p className='text-red-600 text-center mt-2'>{error}</p>}

        {/* Shortened Links List */}
        <div className='mt-4'>
          {shortenedLinks.map((link, index) => (
            <div
              key={index}
              className='flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4 gap-4'
            >
              <p className='truncate max-w-[300px] md:max-w-none text-gray-700'>
                {link.original}
              </p>
              <a
                href={link.shortened}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary hover:underline'
              >
                {link.shortened}
              </a>
              <button
                className={`p-2 w-full md:w-auto text-white rounded-md ${
                  copiedIndex === index
                    ? 'bg-green-500'
                    : 'bg-primary hover:opacity-80 transition'
                }`}
                onClick={() => handleCopy(index, link.shortened)}
              >
                {copiedIndex === index ? 'Copied!' : 'Copy'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Statistics Section */}
      <div className='mt-24 flex flex-col justify-center'>
        <h1 className='font-bold text-3xl md:text-4xl text-center'>
          Advanced Statistics
        </h1>
        <div className='flex justify-center items-center mt-4 md:mt-5'>
          <p className='text-center w-full max-w-[500px] text-[16px] md:text-[19px]'>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className='mt-12 md:mt-16'>
        <div className='relative flex flex-col md:flex-row items-center md:items-stretch gap-8 justify-center'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative w-full max-w-[300px]'
            >
              {/* Icon */}
              <div className='bg-darkBlue text-white p-4 rounded-full mb-4'>
                <span className='text-2xl'>{feature.Image}</span>
              </div>
              {/* Title */}
              <h3 className='text-lg md:text-xl font-bold mb-2'>
                {feature.title}
              </h3>
              {/* Description */}
              <p className='text-gray-600 text-sm md:text-base'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className='mt-20 bg-navy p-3'>
        <div className='mt-24 flex flex-col justify-center'>
          <h1 className='font-bold text-white text-5xl md:text-5xl text-center'>
            Boost your links today
          </h1>
          <div className='flex justify-center items-center mt-4 md:mt-5'>
            <button className='p-2 bg-primary rounded-md text-xl font-semibold text-white w-full md:w-auto'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
