import { useState, useEffect } from 'react';
import { X, Heart, MessageCircle, Share2 } from 'lucide-react';

export const InstagramPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Show popup every time page loads
  useEffect(() => {
    // Show after 1 second
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleFollow = () => {
    window.open('https://www.instagram.com/ignis_ventures_/?utm_source=ig_web_button_share_sheet', '_blank');
    handleClose();
  };

  const handleVisitProfile = () => {
    window.open('https://www.instagram.com/ignis_ventures_/?utm_source=ig_web_button_share_sheet', '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isClosing ? 'bg-black/0' : 'bg-black/50'}`}>
      <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden max-w-sm w-full transform transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Close"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {/* Instagram Header - Gradient Background */}
        <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 h-24 relative flex items-end justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-white rounded-full border-4 border-white flex items-center justify-center -mb-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F1cc8f68dafc342bcab518cbe4f3c04ef%2F95f8baca14ef4282b778fed309344861?format=webp&width=200&height=200"
                alt="Ignis Ventures"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="px-4 pt-4">
          <button
            onClick={handleVisitProfile}
            className="w-full text-left hover:opacity-75 transition-opacity group"
          >
            <h3 className="text-2xl font-bold text-black group-hover:text-red-600 transition-colors">Ignis Ventures Media</h3>
            <p className="text-gray-600 text-sm font-medium group-hover:text-red-500 transition-colors">@ignis_ventures</p>
          </button>

          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
Kotputli-Behror | M.Garh
👨‍💻Digital Marketing Services
✍️Strategy|Social Media|Graphics Design
🤤Turning Your Ideas into Success
Ow. @jatmanishkumar


          </p>

          {/* Stats */}
          <div className="flex justify-between mt-4 py-3 border-y border-gray-200">
            <button
              onClick={handleVisitProfile}
              className="text-center flex-1 hover:text-red-600 transition-colors"
            >
              <p className="text-xl font-bold text-black group-hover:text-red-600">5</p>
              <p className="text-xs text-gray-600">Posts</p>
            </button>
            <button
              onClick={handleVisitProfile}
              className="text-center flex-1 hover:text-red-600 transition-colors"
            >
              <p className="text-xl font-bold text-black group-hover:text-red-600">436</p>
              <p className="text-xs text-gray-600">Followers</p>
            </button>
            <button
              onClick={handleVisitProfile}
              className="text-center flex-1 hover:text-red-600 transition-colors"
            >
              <p className="text-xl font-bold text-black group-hover:text-red-600">13</p>
              <p className="text-xs text-gray-600">Following</p>
            </button>
          </div>
        </div>

        {/* Recent Posts Preview */}
        <div className="px-4 py-4">
  <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-3">Latest Posts</p>

  <div className="grid grid-cols-3 gap-2 mb-4">

    {/* Post 1 */}
    <button
      onClick={handleVisitProfile}
      className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer"
    >
      <img
        src="https://res.cloudinary.com/drrj8rl9n/image/upload/v1774155423/lat_vfe3op.png"
        alt="post"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
        <div className="text-white opacity-0 group-hover:opacity-100 transition flex items-center gap-2 text-sm font-bold">
          <Heart size={16} fill="white" />
          234
        </div>
      </div>
    </button>

    {/* Post 2 */}
    <button
      onClick={handleVisitProfile}
      className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer"
    >
      <img
        src="https://res.cloudinary.com/drrj8rl9n/image/upload/v1774155439/hire_c1sn2h.png"
        alt="post"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
        <div className="text-white opacity-0 group-hover:opacity-100 transition flex items-center gap-2 text-sm font-bold">
          <Heart size={16} fill="white" />
          189
        </div>
      </div>
    </button>

    {/* Post 3 */}
    <button
      onClick={handleVisitProfile}
      className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer"
    >
      <img
        src="https://res.cloudinary.com/drrj8rl9n/image/upload/v1774155439/pre_eqntgj.png"
        alt="post"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
        <div className="text-white opacity-0 group-hover:opacity-100 transition flex items-center gap-2 text-sm font-bold">
          <Heart size={16} fill="white" />
          312
        </div>
      </div>
    </button>

  </div>

  <button
    onClick={handleVisitProfile}
    className="w-full text-center text-xs text-red-600 hover:text-red-700 font-bold py-2 transition-colors"
  >
    View All Posts →
  </button>
</div>

        {/* Action Buttons */}
        <div className="px-4 pb-4 space-y-2">
          <button
            onClick={handleFollow}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>🔴</span>
            Follow @ignis_ventures
          </button>
          <button
            onClick={handleClose}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2.5 rounded-lg transition-colors"
          >
            Later
          </button>
        </div>

        {/* Divider */}
        <div className="px-4 pb-4 border-t border-gray-100 pt-3 flex justify-center gap-6 text-gray-400">
          <button className="hover:text-red-600 transition-colors" title="Like">
            <Heart size={18} />
          </button>
          <button className="hover:text-red-600 transition-colors" title="Comment">
            <MessageCircle size={18} />
          </button>
          <button className="hover:text-red-600 transition-colors" title="Share">
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
