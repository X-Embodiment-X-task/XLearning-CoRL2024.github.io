const project_name = ` X-Embodiment and X-Task Learning`
const proj_small_caps = ` `
const conference_details = ['', 'https://www.corl2024.org/', 'Under-Review', 'assets/images/banner.gif']
const workshop_date = `November, 2024`

const talk_speaker_details = {
  'jb': ['Jeannette Bohg', './assets/images/talks/jeannette_bohg.png', 'Assistant Professor', 'Stanford University', '', '', ''],
  'ai': ['Auke Ijspeert', './assets/images/talks/auke_ijspeert.jpg', 'Full Professor', 'EPFL', '', '', ''],
  'cf': ['Chelsea Finn', './assets/images/talks/chelsea_finn.jpg', 'Assistant Professor', 'Stanford University', '', '', ''],
  'xw': ['Xiaolong Wang', './assets/images/talks/xiaolong_wang.jpg', 'Assistant Professor', 'UC San Diego', '', '', ''],
  'sl': ['Sergey Levine', './assets/images/talks/sergey_levine.jpg', 'Associate Professor', 'UC Berkeley', '', '', ''],
  'lw': ['Lorenz Wellhausen', './assets/images/talks/lorenz_wellhausen.jpeg', 'Research Scientist', 'Swiss-Mile', '', '', ''],
  'dh': ['David Hoeller', './assets/images/talks/david-hoeller.jpg', 'Research Scientist', 'NVIDIA', '', '', ''],
  'yk': ['Young Min Kim', './assets/images/talks/youngmin_kim.jpeg', 'Associate Professor', 'Seoul National University', '', '', ''],
  'dp': ['Deepak Pathak', './assets/images/talks/deepak_pathak.jpg', 'Assistant Professor', 'Carnegie Mellon University', '', '', ''],
  'nh': ['Nicolas Heess', './assets/images/talks/nicolas_heess.jpg', 'Research Scientist', 'Google-DeepMind', '', '', ''],
  'gc': ['Georgia Chalvatzaki (tentative)', './assets/images/talks/Georgia-Chalvatzaki.jpg', 'Full Professor', 'TU Darmstadt', 'https://irosalab.com/people/georgia-chalvatzaki/', 'Tentative', ''],
}


const organizers_details = [
  ['Milad Shafiee', 'assets/images/organizers/milad_shafiee.jpg','PhD Candidate', 'EPFL', 'https://miladshafiee.github.io'],
  ['Guillaume Bellegarda', 'assets/images/organizers/guillaume.jpeg','PostDoc', 'EPFL', ''],
  ['Mengdi Xue', 'assets/images/organizers/mengdi.jpeg','PostDoc', 'Stanford', ''],
  ['Kexin Shi', 'assets/images/organizers/kexin.jpg','PhD Candidate', 'CMU', ''],
  ['Joanne Truong', 'assets/images/organizers/Joanne-Truong.jpeg','Research Scientist', 'Meta (Embodied AI)', ''],
  ['Quan Nguyen', 'assets/images/organizers/quan.jpeg','Assistant Professor', 'USC', ''],
  ['Majid Khadiv', 'assets/images/organizers/majid.jpg','Assistant Professor', 'TUM', ''],
]

const accepted_presentations = [
  ['Poster Presenter', 'https://', 'assets/images/ppt-talks/temp.jpeg', 'Presenter', 'University', 'temp title', 'temp abstract', 'Spotlight', '9:30 - 9:40'],
]

const org_affiliation_logos = [
  'assets/images/affiliation-logos/um-logo.png',
  'assets/images/affiliation-logos/utd-logo.png',
]



// event-alias, time slot, event name, person alias from talk_speaker_details, ppt mode
// last two are for inv-talk event-alias entries
const schedule = [
  ['intro', '08:45 - 09:00', 'Introduction'],
  ['inv-talk', '09:00 - 09:25', 'Invited Talk', 'cf'],
  ['inv-talk', '09:25 - 09:50', 'Invited Talk', 'cf'],
  ['inv-talk', '09:50 - 10:15', 'Invited Talk', 'cf'],
  ['spot-ppt', '10:15 - 10:30', 'Spotlight Presentations'],
  ['coffee-break', '10:30 - 11:00', '<span class="bold has-text-info">Spotlight Posters</span> & Coffee Break'],
  ['inv-talk', '11:00 - 11:25', 'Invited Talk', 'xw'],
  ['inv-talk', '11:25 - 11:50', 'Invited Talk', 'xw'],
  ['disc', '11:50 - 12:15', 'Morning Panel Discussion (X-Embodiment Focus)'], 
  ['lunch-break', '12:15 - 13:00', 'Lunch Break'],
  ['inv-talk', '13:00 - 13:25', 'Invited Talk', 'cf'],
  ['inv-talk', '13:25 - 13:50', 'Invited Talk', 'cf'],
  ['inv-talk', '13:50 - 14:15', 'Invited Talk', 'cf'],
  ['inv-talk', '14:15 - 14:40', 'Invited Talk', 'cf'],
  ['spot-ppt', '14:40 - 15:00', 'Spotlight presentations'],
  ['coffee-break', '15:00 - 15:30', 'Coffee Break'],
  ['inv-talk', '15:30 - 15:55', 'Invited Talk', 'cf', 'in-person'],
  ['inv-talk', '15:55 - 16:20', 'Invited Talk', 'cf', 'in-person'],
  ['disc', '16:20 - 17:00', 'Afternoon Panel Discussion (X-Task Focus)'], 
  ['disc', '17:00 - 17:15', 'Closing remarks and award ceremony'], 
]
