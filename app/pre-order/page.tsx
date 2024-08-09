"use client";

import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import { Container, MenuItem, Select, InputLabel, FormControl, FormControlLabel, Checkbox } from '@mui/material';
import { useState, useEffect } from 'react';

interface FormValues {
    name: string;
    deliveryLocation: string;
    address: string;
    phone: string;
    mangoType: string;
    quantity: number;
    comments?: string;
    terms: boolean;
}

const PreOrderForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [courierCharge, setCourierCharge] = useState<number>(0); // Initial courier charge
    const [packagingCharge] = useState<number>(200); // Fixed packaging charge

    const quantity = watch('quantity', 0);
    const deliveryLocation = watch('deliveryLocation', '');

    useEffect(() => {
        // Set courier charge based on location
        if (deliveryLocation === 'ঢাকা') {
            setCourierCharge(100);
        } else {
            setCourierCharge(120);
        }
    }, [deliveryLocation]);

    useEffect(() => {
        // Calculate total price only if all necessary fields are filled
        if (quantity >= 10 && deliveryLocation && packagingCharge !== undefined && deliveryLocation !== '' && quantity > 0) {
            setTotalPrice((quantity * 100) + courierCharge + packagingCharge);
        } else {
            setTotalPrice(0);
        }
    }, [quantity, deliveryLocation, courierCharge, packagingCharge]);

    const onSubmit = (data: FormValues) => {
        const savaDetails = { totalPrice, courierCharge, packagingCharge, ...data }
        // Handle form data here (e.g., send to an API)
        console.log(savaDetails);
        alert(`Order placed! Total Price: ${totalPrice} টাকা`);
    };

    return (
        <Container sx={{ mt: 11, mb: 8 }} maxWidth='sm'>
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', marginBottom: 1, color: 'darkgreen' }}>
                প্রি-অর্ডার ফর্ম
            </Typography>
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} sx={{ mb: 4 }}>
                <TextField
                    label="নাম"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register('name', { required: 'নাম প্রয়োজন' })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'default',
                            },
                            '&:hover fieldset': {
                                borderColor: 'green',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'green',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'default',
                        },
                        '&:hover .MuiInputLabel-root': {
                            color: 'green',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'green',
                        },
                    }}
                />
                <FormControl fullWidth margin="normal"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'default',
                            },
                            '&:hover fieldset': {
                                borderColor: 'green',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'green',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'default',
                        },
                        '&:hover .MuiInputLabel-root': {
                            color: 'green',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'green',
                        },
                    }}>
                    <InputLabel id="delivery-location-label">ডেলিভারি লোকেশন</InputLabel>
                    <Select
                        labelId="delivery-location-label"
                        label="ডেলিভারি লোকেশন"
                        {...register('deliveryLocation', { required: 'ডেলিভারি লোকেশন নির্বাচন করুন' })}
                        error={!!errors.deliveryLocation}
                        defaultValue=""
                    >
                        <MenuItem value="ঢাকা">ঢাকা</MenuItem>
                        <MenuItem value="চট্টগ্রাম">চট্টগ্রাম</MenuItem>
                        <MenuItem value="রাজশাহী">রাজশাহী</MenuItem>
                        <MenuItem value="খুলনা">খুলনা</MenuItem>
                        <MenuItem value="বরিশাল">বরিশাল</MenuItem>
                        <MenuItem value="সিলেট">সিলেট</MenuItem>
                    </Select>
                    {errors.deliveryLocation && <Typography color="error">{errors.deliveryLocation.message}</Typography>}
                </FormControl>
                <TextField
                    label="ঠিকানা"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    {...register('address', { required: 'ঠিকানা প্রয়োজন' })}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'default',
                            },
                            '&:hover fieldset': {
                                borderColor: 'green',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'green',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'default',
                        },
                        '&:hover .MuiInputLabel-root': {
                            color: 'green',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'green',
                        },
                    }}
                />
                <TextField
                    label="ফোন নম্বর"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register('phone', { required: 'ফোন নম্বর প্রয়োজন', pattern: { value: /^[0-9]+$/, message: 'ভুল ফোন নম্বর' } })}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'default',
                            },
                            '&:hover fieldset': {
                                borderColor: 'green',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'green',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'default',
                        },
                        '&:hover .MuiInputLabel-root': {
                            color: 'green',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'green',
                        },
                    }}
                />
                <FormControl fullWidth margin="normal" sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'default',
                        },
                        '&:hover fieldset': {
                            borderColor: 'green',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'green',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'default',
                    },
                    '&:hover .MuiInputLabel-root': {
                        color: 'green',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: 'green',
                    },
                }}>
                    <InputLabel id="mango-type-label">আম নির্বাচন করুন</InputLabel>
                    <Select
                        labelId="mango-type-label"
                        label="আম নির্বাচন করুন"
                        {...register('mangoType', { required: 'আম নির্বাচন করুন' })}
                        error={!!errors.mangoType}
                        defaultValue=""
                    >
                        <MenuItem value="খিরসাপাত">খিরসাপাত</MenuItem>
                        <MenuItem value="ল্যাংড়া">ল্যাংড়া</MenuItem>
                        <MenuItem value="আলফানসো">হিমসাগর আম</MenuItem>
                    </Select>
                    {errors.mangoType && <Typography color="error">{errors.mangoType.message}</Typography>}
                </FormControl>
                <TextField
                    label="পরিমাণ (সর্বনিম্ন ১০ কেজি)"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    inputProps={{ min: 10 }}
                    {...register('quantity', { required: 'পরিমাণ প্রয়োজন', min: { value: 10, message: 'সর্বনিম্ন ১০ কেজি' } })}
                    error={!!errors.quantity}
                    helperText={errors.quantity?.message}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'default',
                            },
                            '&:hover fieldset': {
                                borderColor: 'green',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'green',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'default',
                        },
                        '&:hover .MuiInputLabel-root': {
                            color: 'green',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'green',
                        },
                    }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, my: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            আমের মূল্য:
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            {totalPrice > 0 ? quantity * 100 : 0} টাকা
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            কুরিয়ার চার্জ:
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            {totalPrice > 0 ? courierCharge : 0} টাকা
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            প্যাকেজিং চার্জ:
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            {totalPrice > 0 ? packagingCharge : 0} টাকা
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontWeight: 'bold',
                            borderTop: '2px dotted black',  // Dotted border with 2px width and black color
                            pt: 1  // Optional: Add padding-top for spacing
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }} component="h1">
                            সর্বমোট:
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }} component="h1">
                            {totalPrice > 0 ? totalPrice : 0} টাকা
                        </Typography>
                    </Box>

                </Box>
                <TextField
                    label="মন্তব্য"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={2}
                    {...register('comments')}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'default',
                            },
                            '&:hover fieldset': {
                                borderColor: 'green',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'green',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'default',
                        },
                        '&:hover .MuiInputLabel-root': {
                            color: 'green',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'green',
                        },
                    }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                {...register('terms', { required: 'আপনার দেয়া সকল তথ্য সত্য' })}
                                sx={{
                                    color: '#008e48',
                                    '&.Mui-checked': {
                                        color: '#008e48',
                                    },
                                }}
                            />
                        }
                        label="আপনার দেয়া সকল তথ্য সত্য"
                    />
                </Box>
                <Button type="submit" variant="contained"
                    sx={{
                        mt: 2,
                        backgroundColor: 'darkgreen',
                        '&:hover': {
                            backgroundColor: 'darkgreen'
                        }
                    }}
                    fullWidth
                >
                    অর্ডার করুন
                </Button>
            </Box>
        </Container>
    );
};

export default PreOrderForm;
