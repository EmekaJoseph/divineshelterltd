<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Company;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Company::create([
            'name' => 'Divine Shelter Construction Services Ltd',
            'description' => 'Leaders in Alternative Building Technology',
            'phone' => '+2348062138803',
            'email' => 'divineshelterltd@gmail.com',
            'facebook' => 'https://facebook.com/divineshelterltd',
            'instagram' => 'https://instagram.com/divineshelterltd',
            'whatsapp' => '+2348062138803',
            'twitter' => 'https://twitter.com/divineshelterltd',
            'address' => '120 Epe/Ijebu-Ode Expressway, Odomola, Epe, Lagos State',
        ]);
    }
}
