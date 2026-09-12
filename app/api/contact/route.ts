import { NextRequest, NextResponse } from 'next/server';
import type { BookingData } from '@/types/index';

/**
 * POST /api/contact
 * Handle contact form submissions
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: BookingData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.serviceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you can:
    // 1. Send email notification
    // 2. Save to database
    // 3. Send WhatsApp message
    // 4. Log to analytics

    console.log('Contact form submission:', body);

    // Simulate successful processing
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your booking request. We will contact you shortly via WhatsApp.',
        data: {
          ...body,
          submittedAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Health check
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { message: 'Contact API endpoint is active' },
    { status: 200 }
  );
}
