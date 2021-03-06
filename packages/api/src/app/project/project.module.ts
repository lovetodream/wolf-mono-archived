import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from '@wolf/schemas';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { ProjectResolver } from './project.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
  providers: [ProjectService, ProjectResolver],
  controllers: [ProjectController],
})
export class ProjectModule {}
