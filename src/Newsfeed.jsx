import { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from './Header/Header';
import GirlCamera from './assets/images/GirlCamera.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/JobListingApp.css'; // Reuse for consistent styling
import {
  FaImage,
  FaVideo,
  FaPen,
  FaThumbsUp,
  FaComment,
  FaCalendarAlt,
} from 'react-icons/fa';
import parse from 'html-react-parser';

export default function Newsfeed() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'video', 'link'],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
      handlers: {
        image: () => imageInputRef.current.click(),
        video: () => videoInputRef.current.click(),
      },
    },
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setImage(URL.createObjectURL(file));
    } else {
      alert('Image must be under 5MB');
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 50 * 1024 * 1024) {
      setVideo(URL.createObjectURL(file));
    } else {
      alert('Video must be under 50MB');
    }
  };

  const triggerImageUpload = () => imageInputRef.current.click();
  const triggerVideoUpload = () => videoInputRef.current.click();

  const triggerCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/sample-user/30min',
        text: 'Schedule a Meeting',
        color: '#006bff',
        textColor: '#ffffff',
        branding: false,
      });
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const handlePost = () => {
    const postData = {
      content,
      image: image ? imageInputRef.current.files[0] : null,
      video: video ? videoInputRef.current.files[0] : null,
    };
    console.log('Posting:', postData);
    setContent('');
    setImage(null);
    setVideo(null);
    if (imageInputRef.current) imageInputRef.current.value = '';
    if (videoInputRef.current) videoInputRef.current.value = '';
  };

  const posts = [
    {
      id: 1,
      author: 'Alice Smith',
      avatar: 'https://i.pravatar.cc/150?img=2',
      time: '1 min',
      content: '<p>Excited to join Glamour Salon as a Senior Hairdresser!</p>',
      images: ['https://picsum.photos/id/1015/600/400'],
    },
    {
      id: 2,
      author: 'Bob Johnson',
      avatar: 'https://i.pravatar.cc/150?img=3',
      time: '16 min',
      content: '<p>Looking for makeup artist gigs in LA. Any leads?</p>',
    },
    {
      id: 3,
      author: 'Claire Brown',
      avatar: 'https://i.pravatar.cc/150?img=6',
      time: '32 min',
      content: '<p>Just completed my nail tech certification!</p>',
      images: ['https://picsum.photos/id/1016/600/400'],
    },
  ];

  return (
    <div className="w3-theme-l5">
      <div className="w3-container">
        <Header />
        <div className="w3-card w3-white w3-round w3-margin px-3 py-2">
          <div className="d-flex align-items-start my-3 w-100">
            <img
              src={GirlCamera}
              alt="Avatar"
              className="w3-left w3-circle w3-margin-right"
              style={{ width: '60px' }}
            />
            <div className="flex-grow-1">
              <ReactQuill
                value={content}
                onChange={setContent}
                placeholder="What's on your mind?"
                modules={modules}
                className="form-control w3-round"
              />
              {image && (
                <div className="preview-container mt-2">
                  <img src={image} alt="Preview" className="w3-round" style={{ maxWidth: '100%', maxHeight: '150px' }} />
                  <button
                    className="btn btn-danger btn-sm mt-1"
                    onClick={() => setImage(null)}
                    aria-label="Remove image"
                  >
                    Remove
                  </button>
                </div>
              )}
              {video && (
                <div className="preview-container mt-2">
                  <video src={video} controls className="w3-round" style={{ maxWidth: '100%', maxHeight: '150px' }} />
                  <button
                    className="btn btn-danger btn-sm mt-1"
                    onClick={() => setVideo(null)}
                    aria-label="Remove video"
                  >
                    Remove
                  </button>
                </div>
              )}
              <div className="toolbar">
                <div className="toolbar-left">
                  <button
                    className="toolbar-btn"
                    onClick={triggerImageUpload}
                    title="Upload Image"
                    aria-label="Upload image"
                  >
                    <FaImage />
                  </button>
                  <button
                    className="toolbar-btn"
                    onClick={triggerVideoUpload}
                    title="Upload Video"
                    aria-label="Upload video"
                  >
                    <FaVideo />
                  </button>
                  <button
                    className="toolbar-btn"
                    onClick={triggerCalendly}
                    title="Schedule Meeting"
                    aria-label="Schedule meeting"
                  >
                    <FaCalendarAlt />
                  </button>
                </div>
                <button className="btn btn-dark" onClick={handlePost}>
                  <FaPen className="me-2" />
                  Post
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={imageInputRef}
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />
                <input
                  type="file"
                  accept="video/*"
                  ref={videoInputRef}
                  style={{ display: 'none' }}
                  onChange={handleVideoChange}
                />
              </div>
            </div>
          </div>
        </div>
        {posts.map((post) => (
          <div key={post.id} className="w3-container w3-card w3-white w3-round w3-margin">
            <br />
            <img
              src={post.avatar}
              alt={`${post.author}'s avatar`}
              className="w3-left w3-circle w3-margin-right"
              style={{ width: '60px' }}
            />
            <span className="w3-right w3-opacity">{post.time}</span>
            <h4>{post.author}</h4>
            <br />
            <hr className="w3-clear" />
            <div>{parse(post.content)}</div>
            {post.images && (
              <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
                {post.images.map((img, index) => (
                  <div key={index} className="w3-half">
                    <img src={img} alt="Post image" style={{ width: '100%' }} className="w3-margin-bottom" />
                  </div>
                ))}
              </div>
            )}
            <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
              <FaThumbsUp /> Like
            </button>
            <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
              <FaComment /> Comment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}