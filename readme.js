const getEmojiByHour = () => {
  const hour = new Date().getHours();

  if (hour >= 0 && hour < 6) {
    return "🌝";
  } else if (hour >= 6 && hour < 12) {
    return "👩‍💻";
  } else if (hour >= 12 && hour < 14) {
    return "🍽️";
  } else if (hour >= 14 && hour < 18) {
    return "🌤️";
  } else if (hour >= 18 && hour < 23) {
    return "📺";
  } else {
    return "🌙";
  }
}

const getTime = () => {
  const now = new Date();
  const hour = now.getHours();
  const period = hour >= 12 ? 'PM' : 'AM';

  return `${hour} ${period}`
}

module.exports = `### Hi

I'm a software engineer working at @IMT.
I love diving into new things, from web & mobile development, to building automation scripts or database models.

### contact me

[camilledr10@gmail.com](mailto:camilledr10@gmail.com)

##

### my stats

[![wakatime](https://wakatime.com/badge/user/77e2d3cb-9d2f-4ba4-b727-e3eac50804fc.svg?style=for-the-badge)](https://wakatime.com/@77e2d3cb-9d2f-4ba4-b727-e3eac50804fc)

![](https://github-readme-stats-avv0gdc8i-camilledtr.vercel.app/api?username=camilledtr&theme=dark&hide_border=true&include_all_commits=true&count_private=true&hide_title=true)<br/>
![](https://github-readme-streak-stats.herokuapp.com/?user=camilledtr&theme=dark&hide_border=true)<br/>
![](https://github-readme-stats-avv0gdc8i-camilledtr.vercel.app/api/top-langs/?username=camilledtr&theme=dark&hide_border=true&include_all_commits=false&count_private=true&layout=compact)

#

added on \`23 Jul 2023\`

last update on \`<#today_date>\` at ${getTime()} ${getEmojiByHour()}.

`;
