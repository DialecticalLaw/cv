export interface ProjectInfo {
  title: string;
  deployLink: string;
  serverLink: string;
  videoLink: string | null;
  imageLink: string;
  date: string;
}

export const projects: ProjectInfo[] = [
  {
    title: 'Library',
    deployLink: 'https://dialecticallaw.github.io/first-training-projects/library/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/5ksoqtu4fso3mlinpg3xv/library.mp4?rlkey=akj6coy2n5lxs9sqn0a85xp6k&st=01tzh0vv&dl=0&raw=1',
    imageLink: '/pictures/library.png',
    date: 'Sep 11, 2023',
  },
  {
    title: 'Image Gallery',
    deployLink: 'https://dialecticallaw.github.io/first-training-projects/image-galery/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/jmz8n4p08obuizu504uqa/image_gallery.mp4?rlkey=yr19hco87b8f7unwp1xu5n69g&st=34bgeeps&dl=0&raw=1',
    imageLink: '/pictures/image_gallery.png',
    date: 'Sep 29, 2023',
  },
  {
    title: 'Audio player',
    deployLink: 'https://dialecticallaw.github.io/first-training-projects/audio-player/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/txpwmyx07jyutuxymbj6u/audio_player.mp4?rlkey=o2jopic3827jtkpbsgtftjohb&st=dwwlzx6d&dl=0&raw=1',
    imageLink: '/pictures/audio_player.png',
    date: 'Sep 22, 2023',
  },
  {
    title: '2048',
    deployLink: 'https://dialecticallaw.github.io/first-training-projects/random-game/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/ynjhcpmc0lnqt897cgwvi/2048.mp4?rlkey=pgi1kbq6xeqqm8wk6auywa60q&st=6hmz6b9q&dl=0&raw=1',
    imageLink: '/pictures/2048.png',
    date: 'Oct 21, 2023',
  },
  {
    title: 'Coffee House',
    deployLink: 'https://dialecticallaw.github.io/second-training-projects/coffee-house/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/occ036xrz6imwh6t1h247/coffee_house.mp4?rlkey=8nld46e9nowrfvzi528t3ld25&st=7fk3d85e&dl=0&raw=1',
    imageLink: '/pictures/coffee_house.png',
    date: 'Dec 13, 2023',
  },
  {
    title: 'Hangman',
    deployLink: 'https://dialecticallaw.github.io/second-training-projects/hangman/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/vg5eycovq7zhy2bhyr1bz/hangman.mp4?rlkey=2yiain3xkus6f3pchxcs5u9rx&st=sivbzzrm&dl=0&raw=1',
    imageLink: '/pictures/hangman.png',
    date: 'Jan 12, 2024',
  },
  {
    title: 'Nonograms',
    deployLink: 'https://dialecticallaw.github.io/second-training-projects/nonograms/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/m4tdu7wn5nypjtjx8klse/nonograms.mp4?rlkey=5t6wvaj07ey1plqa0e94fc06h&st=fn4vqzdb&dl=0&raw=1',
    imageLink: '/pictures/nonograms.png',
    date: 'Feb 3, 2024',
  },
  {
    title: 'Async Race',
    deployLink: 'https://dialecticallaw.github.io/second-training-projects/async-race/',
    serverLink: 'https://github.com/mikhama/async-race-api',
    videoLink:
      'https://www.dropbox.com/scl/fi/ggb0g0kdqe0e4q72wf768/async_race.mp4?rlkey=uysiwjyoxiuip6c03kqo0oqsg&st=2igz7t56&dl=0&raw=1',
    imageLink: '/pictures/async_race.png',
    date: 'Apr 1, 2024',
  },
  {
    title: 'Puzzle',
    deployLink: 'https://dialecticallaw.github.io/second-training-projects/rss-puzzle/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/py0cu0x5nvvicxw990tow/puzzle.mp4?rlkey=vg7y649zzuuvh4cp6omj6oko8&st=llh1ch6c&dl=0&raw=1',
    imageLink: '/pictures/puzzle.png',
    date: 'Mar 21, 2024',
  },
  {
    title: 'Chat',
    deployLink: 'https://dialecticallaw.github.io/second-training-projects/fun-chat/',
    serverLink: 'https://github.com/rolling-scopes-school/fun-chat-server/tree/main',
    videoLink:
      'https://www.dropbox.com/scl/fi/lq4sou0g9oa6ruu2tx0lb/chat.mp4?rlkey=u2vfwlyg6c0tbfbpv1z6s870a&st=h5di0d76&dl=0&raw=1',
    imageLink: '/pictures/chat.png',
    date: 'Apr 22, 2024',
  },
  {
    title: "Sloths's Galactic Store",
    deployLink: 'https://sloths-galactic-store.netlify.app/',
    serverLink: '',
    videoLink:
      'https://www.dropbox.com/scl/fi/1swe7286q23555kw77ujp/sloths_galactic_store.mp4?rlkey=7teq6mywjecdwt7uhy6fj2jvh&st=3re2ti87&dl=0&raw=1',
    imageLink: '/pictures/sloths_galactic_store.png',
    date: 'Jun 25, 2024',
  },
  {
    title: 'CV',
    deployLink: 'https://dialecticallaw-cv.vercel.app/',
    serverLink: '',
    videoLink: null,
    imageLink: '/pictures/cv.png',
    date: 'Oct 24, 2024',
  },
];
