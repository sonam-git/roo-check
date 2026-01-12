import { NextResponse } from 'next/server';
import { clanData } from '@/data/clans';

/**
 * GET /api/clans
 * Returns all major clans and their sub-clans
 */
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: clanData,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch clan data',
      },
      { status: 500 }
    );
  }
}
