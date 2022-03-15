module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = {"message":"dev branch broken by the dev !"};

    try {
        context.res.status(200).json(responseMessage);
      } catch (error) {
        context.res.status(500).send(error);
      }
}