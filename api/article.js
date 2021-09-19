module.exports = async (req, res) => {
  let word  = req.query.word
  let article = await fetch(`https://www.welklidwoord.nl/${word}`)
    .then(res => res.text())
    .then(data => data.match(/<span test>(.*)<\/span>/)[1])
    .catch(err => err)
  return res.status(200).json({aricle: article === 'De of Het' ? 'Helaas, we zijn nog niet zo slim is het wel een zelfstandig naamwoord?' : article})
}
