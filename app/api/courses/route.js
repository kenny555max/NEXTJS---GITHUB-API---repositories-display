import { NextResponse } from "next/server";
import courses from '@/app/api/courses/data.json';

export function GET(request) {
    return NextResponse.json(courses);
}