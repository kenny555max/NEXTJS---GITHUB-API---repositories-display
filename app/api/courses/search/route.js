import { NextResponse } from "next/server";
import Courses from '@/app/api/courses/data.json';

export function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const courses = Courses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase()));
   
    return NextResponse.json(courses);
}