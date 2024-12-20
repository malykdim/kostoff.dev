const projects = [
  {
    id: 1,
    name: 'YT-Playlists',
    thumbnailBaseName: '/assets/images/playlists/playlists-thumbnail',
    description: 'An app for organizing and sharing playlists',
    gitHub: 'https://github.com/malykdim/yt-playlists',
    link: 'https://yt-playlist-7fa47.web.app/login',
    tags: ['Vue 3', 'Firebase'],
    features: [
      { text: 'User authentication', icon: 'pi pi-users' },
      { text: 'Create, Update, Delete notes', icon: 'pi pi-pencil' },
      { text: 'File Upload', icon: 'pi pi-cloud-upload' },
      { text: 'View Statistics', icon: 'pi pi-chart-bar' },
    ],
    gallery: [
      '/assets/images/playlists/playlists-auth-1024w.jpg',
      '/assets/images/playlists/playlists-list-1024w.jpg',
      '/assets/images/playlists/playlists-item-guest-1024w.jpg',
      '/assets/images/playlists/playlists-create-1024w.jpg',
      '/assets/images/playlists/playlists-item-owner-1024w.jpg',
      '/assets/images/playlists/playlists-item-owner-add-1024w.jpg',
      '/assets/images/playlists/playlists-profile-1024w.jpg',
      '/assets/images/playlists/playlists-thumbnail-1024w.jpg',
    ],
  },
  {
    id: 2,
    name: 'Notes',
    thumbnailBaseName: '/assets/images/notes/notes-thumbnail',
    description: 'A note taking app',
    gitHub: 'https://github.com/malykdim/notes',
    link: 'https://notes-1748b.web.app/',
    tags: ['Vue 3', 'Firebase'],
    features: [
      { text: 'User authentication', icon: 'pi pi-users' },
      { text: 'Filter by User', icon: 'pi pi-filter' },
      { text: 'CRUD operations', icon: 'pi pi-pencil' },
    ],
    gallery: [
      '/assets/images/notes/notes-login-1024w.jpg',
      '/assets/images/notes/notes-thumbnail-1024w.jpg',
      '/assets/images/notes/notes-edit-1024w.jpg',
      '/assets/images/notes/notes-stats-1024w.jpg',
    ],
  },
  {
    id: 3,
    name: 'The Stone Magic',
    thumbnailBaseName: '/assets/images/mosaics/mosaics-thumbnail',
    description: 'A virtual gallery for exquisite mosaic panneaux',
    gitHub: 'https://github.com/malykdim/thestonemagic',
    link: 'https://malykdim.github.io/thestonemagic/',
    tags: ['React', 'Back4App'],
    features: [
      { text: 'User authentication', icon: 'pi pi-user' },
      { text: 'CRUD operations for Admin', icon: 'pi pi-pencil' },
    ],
    gallery: [
      '/assets/images/mosaics/mosaics-home-1024w.jpg',
      '/assets/images/mosaics/mosaics-thumbnail-1024w.jpg',
      '/assets/images/mosaics/mosaics-details-1024w.jpg',
      '/assets/images/mosaics/mosaics-contact-1024w.jpg',
    ],
  },
]

export { projects }
