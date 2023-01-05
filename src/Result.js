import React, { useMemo } from 'react'
import { Typographym, Card, CardContent, CardActions, Button, Typography } from '@mui/material'

import questions from "./data/questions";

export default function Result(props) {
    const { answers } = props;
        
        const correctAnswers = useMemo(() => {
            return questions.filter((q, i) => {
                return q.correctAnswer === parseInt(answers[i]);
            }).length;
            }, [answers])
        
  return (
    <Card variant ='outlined' sx={{ pt: 3, pb: 3 }}>
        <CardContent>
            <Typography sx={{ display:"flex", justifyContent: "center", mb: 3 }} variant="h4" color="text.secondary">
                {correctAnswers} / {questions.length}
            </Typography>
        </CardContent>
    </Card>
  )
}
