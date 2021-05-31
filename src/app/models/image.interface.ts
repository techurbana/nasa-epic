export interface Image {
    identifier: string;
    caption: string;
    version: number;
    image: string;
    centroid: Coordinates;
    dscovr_j2000_position: Position;
    lunar_j2000_position: Position;
    sun_j2000_position: Position;
    attitude_quaternions: Quaternions;
    date: string;
}

export interface Coordinates{
    lat: number;
    lon: number;
}

export interface Position{
    x: number;
    y: number;
    z: number;
}

export interface Quaternions{
    q0: number;
    q1: number;
    q2: number;
    q3: number;
}