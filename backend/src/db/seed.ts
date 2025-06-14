import db from '../config/connection';
import { users } from './../schemas/user';
import bcrypt from 'bcryptjs';

async function seed() {
  try {
    console.log('Seeding database...');

    // Clear existing data
    await db.delete(users);

    // Hash passwords
    const hashedPasswords = await Promise.all([
      bcrypt.hash('123456', 10),
      bcrypt.hash('abcdef', 10),
      bcrypt.hash('qwerty', 10),
      bcrypt.hash('pass1234', 10),
      bcrypt.hash('admin2024', 10),
    ]);

    // Insert seed data
    await db.insert(users).values([
      {
        firstName: 'Juan',
        lastName: 'Pérez',
        email: 'juan.perez@example.com',
        password: hashedPasswords[0],
        dateOfBirth: '1990-05-15',
        phoneNumber: '3001234567',
        address: 'Calle 123 #45-67',
        city: 'Bogotá',
        country: 'Colombia',
        gender: 'male',
        isActive: true,
      },
      {
        firstName: 'María',
        lastName: 'Gómez',
        email: 'maria.gomez@example.com',
        password: hashedPasswords[1],
        dateOfBirth: '1985-11-22',
        phoneNumber: '3017654321',
        address: 'Carrera 10 #20-30',
        city: 'Medellín',
        country: 'Colombia',
        gender: 'female',
        isActive: true,
      },
      {
        firstName: 'Carlos',
        lastName: 'Ramírez',
        email: 'carlos.ramirez@example.com',
        password: hashedPasswords[2],
        dateOfBirth: '1992-08-10',
        phoneNumber: '3109988776',
        address: 'Av. Siempre Viva 742',
        city: 'Cali',
        country: 'Colombia',
        gender: 'male',
        isActive: true,
      },
      {
        firstName: 'Luisa',
        lastName: 'Fernández',
        email: 'luisa.fernandez@example.com',
        password: hashedPasswords[3],
        dateOfBirth: '1995-03-02',
        phoneNumber: '3122233445',
        address: 'Diagonal 22 #33-44',
        city: 'Barranquilla',
        country: 'Colombia',
        gender: 'female',
        isActive: true,
      },
      {
        firstName: 'Andrés',
        lastName: 'Torres',
        email: 'andres.torres@example.com',
        password: hashedPasswords[4],
        dateOfBirth: '1988-07-07',
        phoneNumber: '3133344556',
        address: 'Transversal 56 #78-90',
        city: 'Cartagena',
        country: 'Colombia',
        gender: 'male',
        isActive: true,
      },
    ]);

    console.log('Database seeded successfully with 5 users');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seed();