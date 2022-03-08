import express from "express";
import { handle } from "express/lib/application";
import res, { redirect } from "express/lib/response";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        return res.send("Server Error");
    }
}

export const getEdit = (req, res) => {
    const id = req.params.id;
    res.render("edit", { pageTitle: `Editing : ${video.title}` });
}

export const watch = (req, res) => {
    const id = req.params.id;
    res.render("watch", { pageTitle: `Watching ${video.title}` });
}

export const postEdit = (req, res) => {
    const id = req.params.id;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
}

export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" });
}

export const postUpload = (req, res) => {
    //here we will add a video to the videos array.
    const { title , description, hashtags} = req.body;
    const video = new Video({
        title,
        description,
        createdAt:Date.now(),
        hashtags : hashtags.split(",").map(word => `#${word}`),
        meta:{
            views:0,
            rating:0.
        },
    })
    console.log(video);
    
    return res.redirect("/");
}