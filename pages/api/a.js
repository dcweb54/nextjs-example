export default (req,res) => {
    const { query: { id } } = req
    res.json({name:"deepak",id:id})
}