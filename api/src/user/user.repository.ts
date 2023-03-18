import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Cria o usuário.
   *
   * @param {CreateUserDto} createUserDto
   * @returns
   */
  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  /**
   * Obtém os usuários.
   *
   * @returns
   */
  async findAll() {
    return this.prisma.user.findMany();
  }

  /**
   * Obtém o usuário.
   *
   * @param {number} id
   * @returns
   */
  async find(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  /**
   * Obtém o usuário a partir dos parâmetros.
   *
   * @param {any} param
   * @returns
   */
  async findByParam(param: any) {
    return this.prisma.user.findFirst({ where: param });
  }

  /**
   * Atualiza o usuário.
   *
   * @param {number} id
   * @param {UpdateUserDto} updateUserDto
   * @returns
   */
  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ data: updateUserDto, where: { id } });
  }

  /**
   * Remove o usuário.
   *
   * @param {number} id
   * @returns
   */
  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

  async userExists(id: number) {
    const user = await this.prisma.user.count({
      where: {
        id,
      },
    });

    return !!user;
  }
}
