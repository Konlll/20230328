import { Router as expressRouter } from "express";
import { getLanguages, getLanguage, newLanguage, updateLanguage, deleteLanguage } from "../database.js";

const router = expressRouter();

router.get('/', async (req, res) => {
    const languages = await getLanguages()
    res.status(200).json(languages)
})

router.get('/:id', async (req, res) => {
    const language = await getLanguage(req.params.id)
    res.status(200).json(language)
})

router.post('/', async (req, res) => {
    let languages = await getLanguages()
    let names = languages.map(language => language.name.toLowerCase())
    if (names.includes(req.body.name.toLowerCase())) {
        res.status(422).json({ message: `The progamming language ${req.body.name} is already exists.` })
    } else {
        await newLanguage(req.body)
        res.status(200).json({ message: "Success" })
    }
})

router.put('/', async (req, res) => {
    let languages = await getLanguages()
    let names = languages.map(language => language.name.toLowerCase())
    if (names.includes(req.body.name.toLowerCase())) {
        res.status(422).json({ message: `The progamming language ${req.body.name} is already exists.` })
    } else {
        await editLanguage(req.body)
        res.status(200).json({ message: "Success" })
    }
})

router.delete('/', async (req, res) => {
    await deleteLanguage(req.body.id)
    res.status(200).json({ message: "Success" })
})

export { router }