import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { StatementService } from './statements.service';
import { CreateStatementDto } from './dto/create-statement.dto';

@Controller('statements')
export class StatementController {
  constructor(private readonly statementService: StatementService) {}

  @Get()
  findAll() {
    return this.statementService.findAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('bank-statement'))
  parse(@Body() body: CreateStatementDto, @UploadedFile() file: Express.Multer.File) {
    return this.statementService.create(body, file);
  }
}
