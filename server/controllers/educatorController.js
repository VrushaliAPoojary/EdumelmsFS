
import {clerkClient} from '@clerk/express'

//update role to educator

export const updateRoleToEducator = async (req,res)=>{
    try{
        const userId = req.auth.userId

        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata:{
                role: 'educator',
            }
        })
        res.json({success: true, message:'you can publish a course now'})

    } catch (error) {
        res.json({success:false, message: error.message})

    }
}

//ad new course
export const addNewCourse = async (req,res)=>{
    try{
        const {courseData} = req.body
        const imageFile = req.file
        const educatorId = req.auth.userId
        if(!imageFile){
            return res.json({success:false, message: 'Thumbnail not attatched'})
        }
        const parsedCourseData = await JSON.parse(courseData)
        parsedCourseData.educator = educatorId
        const newCourse = await Course.create(parsedCourseData)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path)
        newCourse.courseThumbnail = imageUpload.secure_url
        await newCourse.save()
        res.json({success:true, message: 'Course created successfully'})
    } catch(error){
        res.json({success:false, message: error.message})

    }
}