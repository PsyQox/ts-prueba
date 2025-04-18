import { Router, Request, Response } from "express";
import * as diaryServices from "../services/diaryServices"
import toNewDiaryEntry from "../utils";

const router = Router()

router.get('/', (_req, res)=>{

    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req: Request, res: Response) =>{
    const diary = diaryServices.findById(+req.params.id)

    // (diary != null) ? res.send(diary): res.sendStatus(404)
    res.send(diary)
    if (diary != null) {
        res.send(diary)
    }else{
        res.sendStatus(404)
    }
    return;
})

router.post('/', (req, res)=>{
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

        res.json(addedDiaryEntry)

    } catch (error:any) {
        res.status(400).send(error.message)
    }
    

})

export default router