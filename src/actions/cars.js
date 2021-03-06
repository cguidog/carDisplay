//
import uuid from 'uuid';

export const addCar = (
    {
        brand = '',
        style = '',
        year = 0,
        price = 0,
        transmission = '',
        image= '',
        exteriorColor= '',
        interiorColor= ''
    } = {}
) => ({
    type: 'ADD_CAR',
    car: {
        id: uuid(),
        brand,
        style,
        year,
        price,
        transmission,
        image,
        exteriorColor,
        interiorColor
    }
});