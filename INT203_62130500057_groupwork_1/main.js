const Selfmade = {
    data() {
      return {
        albumName: 'Selfmade',
        artist: 'UrboyTJ',
        releaseDate: '3 พ.ย. 2020 • 12 เพลง',
        songs: [
            { nameSong: 'ชูมือขึ้น', artist: 'UrboyTJ'},
            { nameSong: 'ถามคำ', artist: 'UrboyTJ'},
            { nameSong: 'อยู่ก่อน', artist: 'UrboyTJ, โอ๊ต ปราโมทย์'},
            { nameSong: 'ช่วยไม่ได้', artist: 'UrboyTJ'},
            { nameSong: 'กอดได้ไหม', artist: 'UrboyTJ'},
            { nameSong: 'Selfmade', artist: 'UrboyTJ, Violet Wautier'},
            { nameSong: 'ซุปเปอร์ไซย่า', artist: 'UrboyTJ, Maiyarap'},
            { nameSong: 'รับให้ได้', artist: 'UrboyTJ'},
            { nameSong: 'ยิ่งเกลียดยิ่งรัก', artist: 'UrboyTJ'},
            { nameSong: 'สักวัน', artist: 'UrboyTJ, กานต์ The Parkinson'},
            { nameSong: 'หลับตา', artist: 'UrboyTJ'},
            { nameSong: 'Sad One', artist: 'UrboyTJ'}
        ]
      }
    }
  }
  
  Vue.createApp(Selfmade).mount('#selfmade')