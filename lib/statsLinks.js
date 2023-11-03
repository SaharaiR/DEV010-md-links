function statsLinks(links, stadistcs, valid) {
  const hasLink = new Set();
  let unique = 0;
  let repeated = 0;
  let total = 0;
  let linksOk = 0;
  let linksFail = 0;
  if (stadistcs && valid) {
    links.forEach((element) => {
      if (hasLink.has(element.url)) {
        repeated += 1;
        total += 1;
      } else {
        hasLink.add(element.url);
        unique += 1;
        total += 1;
      }
      if (element.status === 200) {
        linksOk += 1;
      } else if (element.status === 404) {
        linksFail += 1;
      }
    });
    console.log(`Unique: ${unique}`);
    console.log(`Repeat: ${repeated}`);
    console.log(`Links OK: ${linksOk}`);
    console.log(`Links Fail: ${linksFail}`);
    console.log(`Total: ${total}`);
  } else if (stadistcs && valid === false) {
    links.forEach((element) => {
      if (hasLink.has(element.url)) {
        repeated += 1;
        total += 1;
      } else {
        hasLink.add(element.url);
        unique += 1;
        total += 1;
      }
    });
    console.log(`Unique: ${unique}`);
    console.log(`Repeat: ${repeated}`);
    console.log(`Total: ${total}`);
  }
}

module.exports = statsLinks;
