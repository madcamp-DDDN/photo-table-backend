const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    kakao_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    profile_pic_id: { type: mongoose.Schema.Types.ObjectId, ref: 'profile_pics' },  // GridFS 파일 ID 저장
    created_at: { type: Date, default: Date.now },
    friend_list_id: { type: mongoose.Schema.Types.ObjectId, ref: 'FriendList' }  // 친구 리스트와 연결
});

module.exports = mongoose.model('User', userSchema);