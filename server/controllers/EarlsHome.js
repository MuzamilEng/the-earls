const Content = require('../models/earlsSchema');


const getHomeContents = async (req, res) => {
    try {
        const contents = await Content.find();
        res.json(contents);
        //   console.log('contents found', contents);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getHomeContentById = async (req, res) => {
    try {
        const signleContent = await Content.findById(req.params.contentId);
        if (!signleContent) {
            return res.status(404).json({ error: 'Content not found' });
        }
        res.json(signleContent);
        //   console.log('Content found', signleContent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const updateHomeContent = async (req, res) => {
    try {
        const updatedContent = await Content.findByIdAndUpdate(
            req.params.contentId,
            req.body,
            { new: true } // Return the updated product
        );
        if (!updatedContent) {
            return res.status(404).json({ error: 'Content not found' });
        }
        res.json(updatedContent);
        //   console.log('Content updated', updatedContent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const deleteHomeContent = async (req, res) => {
    try {
        const deleteContent = await Content.findByIdAndRemove(req.params.contentId);
        if (!deleteContent) {
            return res.status(404).json({ error: 'Content not found' });
        }
        res.json(deleteContent);
        //   console.log('Content deleted', deleteContent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    getHomeContents,
    getHomeContentById,
    updateHomeContent,
    deleteHomeContent
};
