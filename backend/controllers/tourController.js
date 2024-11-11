import Tour from '../models/Tour.js'


//create a new tour
export const createTour = async (req, res) => {
    console.log("Received request body:", req.body);
    const newTour = new Tour(req.body);
    
    try {
        const savedTour = await newTour.save();
        res.status(200).json({success: true, message:'Successfully created', data: savedTour});
    } catch (error) {
        res.status(500).json({ success:false, message: error.message });
    }
};


// update tour
export const updateTour = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json({ success: true, message: 'Successfully updated', data: updatedTour });
    } catch (error) { 
        res.status(500).json({ success:false, message: error.message });
    }
        
}
 
// delete tour
export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try {
        await Tour.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Successfully deleted' });
    
    } catch (error) {
        res.status(500).json({ success:false, message: error.message });
     }
        
}
// get singletours
export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id);
        res.status(200).json({ success: true, message: 'Successfully found', data: tour });
    
    } catch (error) {
        res.status(404).json({ success:false, message: error.message });
     }
        
}
//  get all tour
export const getAllTour = async (req, res) => {

    //for pagination
    const page = parseInt(req.query.page);
    console.log( page);
    
    try {
        const tours = await Tour.find({}).skip(page * 8).limit(8);
        res.status(200).json({ success: true, count:tours.length, message: 'Successfully found', data: tours });
    
    } catch (error) {
        res.status(404).json({ success:false, message: error.message });
    }    
 }


//get tour by search
export const getTourBySearch = async (req, res) => {

    const city = new RegExp(req.query.city, 'i');  //here i means case sensitive
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        const tours = await Tour.find({
            city: city,
            distance: { $gte: distance },
            maxGroupSize: { $gte: maxGroupSize }
        });
        res.status(200).json({ success: true, message: 'Successfull', data: tours });
    }
    catch (error) {
        res.status(404).json({ success:false, message: error.message });
    }
}

//get featured tour
export const getFeaturedTour = async (req, res) => {
    
    try {
        const tours = await Tour.find({featured: true}).limit(8);
        res.status(200).json({ success: true, message: 'Successfully found', data: tours });
    
    } catch (error) {
        res.status(404).json({ success:false, message: error.message });
    }    
 }

//get tour counts
export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({ success: true, data: tourCount });
    
    } catch (error) {
        res.status(500).json({ success:false, message: error.message });
    }
 }