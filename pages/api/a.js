export default (req,res) => {
    const { query: { id } } = req
    res.json({name:"xyz",id:id})
}