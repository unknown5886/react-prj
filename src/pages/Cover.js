import {useState} from "react";
import {
    Slider,
    Box,
    Switch,
    Fade,
    Container,
} from '@mui/material';

export function Cover(props) {
    const [lock, setLock] = useState(true)
    const handleSwitch = () => {
        setLock(!lock)
    }
    const handleChange = (event) => {
        console.log(event.target.value)
    }



    const Keeper = () => {
        return(
            <Switch
                checked={lock}
                onChange={handleSwitch}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        )
    }
    const Answer = () => {
        return(

        <Slider
            onChange={handleChange}
            defaultValue={30}
            size={'medium'}
            aria-label={'Default'}
            valueLabelDisplay={'auto'}
        />
        )
    }
    return(
        <Box
            bgcolor={lock ? '#224B51' : '#173A5E'}
            boxSizing={100}
            width={'92%'}
            height= {'96%'}
            borderRadius={3}
            boxShadow={2}
            my={2}
            mx={2}
        >

            <Keeper/>
            <Answer/>

        </Box>

    )
}