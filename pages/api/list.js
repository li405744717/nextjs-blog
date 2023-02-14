export default function handler(req, res) {
  res.status(200).json({list: [1, 2, 3, 4, 5, 6]});
}