const project_name = ` X-Embodiment and X-Task Learning`
const proj_small_caps = ` `
const conference_details = ['', 'https://www.corl2024.org/', 'Under-Review', 'assets/images/banner.gif']
const workshop_date = `November, 2024`

const talk_speaker_details = {
  'cf': ['Chelsea Finn', './assets/images/talks/chelsea_finn.jpg', 'Assistant Professor', 'Stanford University', '', '', ''],
  'xw': ['Xiaolong Wang', './assets/images/talks/xiaolong_wang.jpg', 'Associate Professor', 'Carnegie Mellon University', '', '', ''],
  'jb': ['Jeannette Bohg', './assets/images/talks/jeannette_bohg.png', 'Research Scientist', 'Meta AI', '', '', ''],
  'ai': ['Auke Ijspeert', './assets/images/talks/auke_ijspeert.jpg', 'Research Scientist', 'Meta AI', '', '', ''],
  'sl': ['Sergey Levine', './assets/images/talks/sergey_levine.jpg', 'Professor', 'University of Michigan', '', '', ''],
  'lw': ['Lorenz Wellhausen', './assets/images/talks/lorenz_wellhausen.jpeg', 'Assistant Professor', 'Swiss-Mile', '', '', ''],
  'dh': ['David Hoeller', './assets/images/talks/david-hoeller.jpg', 'Research Scientist', 'NVIDIA', '', '', ''],
  'yk': ['Young Min Kim', './assets/images/talks/youngmin_kim.jpeg', 'Assistant Professor', '', '', '', ''],
  'dp': ['Deepak Pathak', './assets/images/talks/deepak_pathak.jpg', 'Assistant Professor', 'Carnegie Mellon University', '', '', ''],
  'nh': ['Nicolas Heess', './assets/images/talks/nicolas_heess.jpg', 'Research Scientist', 'Carnegie Mellon University', '', '', ''],
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
  ['inv-talk', '09:00 - 09:30', 'Invited Talk', 'cf'],
  ['spot-ppt', '09:30 - 10:30', 'Spotlight Presentations'],
  ['coffee-break', '10:30 - 11:30', '<span class="bold has-text-info">Spotlight Posters</span> & Coffee Break'],
  ['inv-talk', '11:30 - 12:00', 'Invited Talk', 'xw'],
  ['inv-talk', '12:00 - 12:30', 'Invited Talk',  'cf', 'in-person'],
  ['lunch-break', '12:30 - 14:00', 'Lunch Break'],
  ['inv-talk', '14:00 - 14:30', 'Invited Talk', 'cf'],
  ['spot-ppt', '14:30 - 15:30', 'Spotlight presentations'],
  ['coffee-break', '15:30 - 16:00', 'Coffee Break'],
  ['inv-talk', '16:00 - 16:30', 'Invited Talk', 'cf', 'in-person'],
  ['inv-talk', '16:30 - 17:00', 'Invited Talk', 'cf', 'in-person'],
  ['disc', '17:00 - 17:05', 'Conclusion'], 
]
